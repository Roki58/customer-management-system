using System.Collections.Generic;
using CustomerManagementApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomerManagementApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
    }
}