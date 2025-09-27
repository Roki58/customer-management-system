using CustomerManagementApi.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagementApi.Services
{
    public interface ICustomerService
    {
        Task<IEnumerable<CustomerDTO>> GetAllAsync();
        Task<CustomerDTO> GetByIdAsync(int id);
        Task<CustomerDTO> AddAsync(CustomerDTO customerDto);
        Task UpdateAsync(int id, CustomerDTO customerDto);
        Task DeleteAsync(int id);
    }
}