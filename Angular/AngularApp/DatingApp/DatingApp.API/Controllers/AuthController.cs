using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.API.Data.IRepository;
using DatingApp.API.DTOs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using System;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _config;

        public AuthController(
                IAuthRepository authRepository,
                IConfiguration config
            )
        {
            this._authRepository = authRepository;
            this._config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDTO userForRegister)
        {
            User UsertobeCreated = new User()
            {
                UserName = userForRegister.username.ToLower()    
            };

            if(await _authRepository.UserExists(UsertobeCreated.UserName) == true){
                return BadRequest($"{UsertobeCreated.UserName} - Username already exists.");
            }

            var createdUser =  await _authRepository.Register(UsertobeCreated, userForRegister.password);

            return StatusCode(201);    
        }

         [HttpPost("login")]
         /// https://jwt.io
        public async Task<IActionResult> Login(UserForLoginDTO userForLoginDTO)
        {
           var userFromRepo = await _authRepository.Login(userForLoginDTO.username.ToLower(), 
                                    userForLoginDTO.password);

           if(userFromRepo == null)
                return Unauthorized();

            //Create a Claims
            var claims    = new []{
                new Claim(ClaimTypes.NameIdentifier , userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name , userFromRepo.UserName.ToString())
            };

            //Create Key store it in app setting file
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _config.GetSection("AppSetting:Token").Value
            ));

            //Create a Signing Credentials
            var creds = new   SigningCredentials(key , SecurityAlgorithms.HmacSha512Signature) ;

            //Create a Token Descriptor
            var tokenDescriptor = new SecurityTokenDescriptor(){
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            //Create a token Handler 
            var tokenHandler = new JwtSecurityTokenHandler();

            //Create token 
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}