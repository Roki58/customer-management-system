using AutoMapper;
using CustomerManagementApi.Entities;
using CustomerManagementApi.DTOs;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CustomerManagementApi.Profiles
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerDTO>().ReverseMap();
        }
    }
}