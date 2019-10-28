using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForLoginDTO
    {
        [Required(ErrorMessage = "User name cannot be empty")]
        public string username { get; set; }
        [Required(ErrorMessage = "Password cannot be empty")]
        [StringLength(8, MinimumLength = 4 , ErrorMessage = 
                        "Password should be more than 4 character & less than 8 character")]
         public string password { get; set; }
    }
}