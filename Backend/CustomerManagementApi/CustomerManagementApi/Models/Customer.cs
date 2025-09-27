using System.ComponentModel.DataAnnotations;

namespace CustomerManagementApi.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required, Phone]
        public string MobileNumber { get; set; }
        [Required]
        public string Address { get; set; }
        [Range(0, double.MaxValue)]
        public decimal Balance { get; set; }
    }
}