using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;

namespace DatingApp.API.Data
{
    public class DataContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        //  public IConfiguration Configuration { get; }
        // public DataContextFactory(IConfiguration configuration)
        // {
        //     Configuration = configuration;
        // }

        public DataContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            //optionsBuilder.UseSqlite("Configuration.GetConnectionString("DefaultConnection"));

            return new DataContext(optionsBuilder.Options);
        }
   }
}