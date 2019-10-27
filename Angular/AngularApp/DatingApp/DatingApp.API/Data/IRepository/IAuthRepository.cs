using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data.IRepository
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string Password);
        Task<User> Login(User user, string Password);
        Task<bool> UserExists(User user);
    } 
    
}