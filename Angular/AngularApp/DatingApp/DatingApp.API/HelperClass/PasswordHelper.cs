using System.Security.Cryptography;
using System.Text;

namespace DatingApp.API.HelperClass
{
    public interface IPasswordHelper
    {
        public void CreatePasswordHash(
            string Password,
            out byte[] PasswordHash,
            out byte[] PasswordSalt);

        public bool VerifyPasswordHash(
            string Password,
            out byte[] PasswordHash,
            out byte[] PasswordSalt);
    }
    public class PasswordHelper : IPasswordHelper
    {
        public void CreatePasswordHash(
            string Password,
            out byte[] PasswordHash,
            out byte[] PasswordSalt)
        {
            PasswordSalt = null;
            PasswordHash = null;
            using(var hmac = new HMACSHA512()){
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(Password));
                PasswordSalt = hmac.Key;
            }   
        }

        public bool VerifyPasswordHash(string Password, out byte[] PasswordHash, out byte[] PasswordSalt)
        {
            PasswordSalt = null;
            PasswordHash = null;
            using(var hmac = new HMACSHA512()){
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(Password));
                for(int i = 0; i < computedHash.Length;i++)
                {
                    if(computedHash[i] != PasswordHash[i]) return false;
                }                 
            }   
            return true;
        }
    }
}