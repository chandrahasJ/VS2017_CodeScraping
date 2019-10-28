using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public ValuesController(DataContext dataContext)
        {
            this._dataContext = dataContext; 
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            // throw new Exception("Test Expection");
            var values =await _dataContext.Values.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value =await  _dataContext.Values.FirstOrDefaultAsync(x => x.Id == id);
            if(value == null){
                return this.NotFound("Data Not Found");
            }
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

//Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwidW5pcXVlX25hbWUiOiJjaGFuZHJhaGFzIiwibmJmIjoxNTcyMjU4NDg3LCJleHAiOjE1NzIzNDQ4ODcsImlhdCI6MTU3MjI1ODQ4N30.XECRITrbfkk0I9-nSZ0UCpDD8BOj1oBVeiZpCsV_yG5S9594IiQS4nGRPgRW-b7HUbHFNtMmFpHJY5MjKh4ohQ