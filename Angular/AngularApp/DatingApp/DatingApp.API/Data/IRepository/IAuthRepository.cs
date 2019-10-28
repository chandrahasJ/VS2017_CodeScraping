using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data.IRepository
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string Password);
        Task<User> Login(string user, string Password);
        Task<bool> UserExists(string user);
    } 
    
}