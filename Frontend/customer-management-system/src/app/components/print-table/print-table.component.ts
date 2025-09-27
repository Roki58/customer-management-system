import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-print-table',
  templateUrl: './print-table.component.html',
  styleUrls: ['./print-table.component.css']
})
export class PrintTableComponent implements OnInit {
  customers: Customer[] = [];
  today: Date = new Date();
  totalBalance: number = 0;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
      this.totalBalance = this.customers.reduce((sum, customer) => sum + customer.balance, 0);
    });
  }

  print(): void {
    window.print();
  }
}