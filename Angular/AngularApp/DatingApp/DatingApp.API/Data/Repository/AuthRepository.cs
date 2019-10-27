using System.Threading.Tasks;
using DatingApp.API.Data.IRepository;
using DatingApp.API.HelperClass;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IPasswordHelper passwordHelper;
        private readonly DataContext dataContext;

        public AuthRepository(IPasswordHelper passwordHelper, DataContext dataContext)
        {
            this.passwordHelper = passwordHelper;
            this.dataContext = dataContext;
        }
        public async Task<User> Login(string UserName, string Password)
        {
            var userData = await dataContext.Users.FirstOrDefaultAsync(x => x.UserName == UserName);
            if(userData == null) return null;

            byte[] PasswordHash  = userData.PasswordHash;
            byte[] PasswordSalt = userData.PasswordSalt;
            var isVerfied = this.passwordHelper.VerifyPasswordHash(
                Password,
                out PasswordHash,
                out PasswordSalt
            );

            if(!isVerfied) return null;            
             
            return userData;
        }

        public async Task<User> Register(User user, string Password)
        {
            byte[] PasswordHash  = null;
            byte[] PasswordSalt = null;
            this.passwordHelper.CreatePasswordHash(
                Password,
                out PasswordHash,
                out PasswordSalt
            );

            user.PasswordHash = PasswordHash;
            user.PasswordSalt = PasswordSalt;

            await dataContext.Users.AddAsync(user);
            await dataContext.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExists(string username)
        {
            if(await dataContext.Users.AnyAsync(x => x.UserName == username)){
                return true;
            }

            return false;
        }
    }
}