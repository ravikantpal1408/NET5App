using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // Adding DbSet for App User
        public DbSet<AppUser> Users {get ; set ;}
    }
}