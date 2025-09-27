using AutoMapper;
using CustomerManagementApi.DTOs;
using CustomerManagementApi.Entities;
using CustomerManagementApi.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagementApi.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _repository;
        private readonly IMapper _mapper;

        public CustomerService(ICustomerRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CustomerDTO>> GetAllAsync()
        {
            var customers = await _repository.GetAllAsync();
            return _mapper.Map<IEnumerable<CustomerDTO>>(customers);
        }

        public async Task<CustomerDTO> GetByIdAsync(int id)
        {
            var customer = await _repository.GetByIdAsync(id);
            if (customer == null)
            {
                return null;
            }
            return _mapper.Map<CustomerDTO>(customer);
        }

        public async Task<CustomerDTO> AddAsync(CustomerDTO customerDto)
        {
            var customer = _mapper.Map<Customer>(customerDto);
            await _repository.AddAsync(customer);
            return _mapper.Map<CustomerDTO>(customer);
        }

        public async Task UpdateAsync(int id, CustomerDTO customerDto)
        {
            var customer = _mapper.Map<Customer>(customerDto);
            customer.Id = id;
            await _repository.UpdateAsync(customer);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}