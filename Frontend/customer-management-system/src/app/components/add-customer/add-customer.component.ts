import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer = { id: 0, name: '', email: '', mobileNumber: '', address: '', balance: 0 };

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit(): void {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}