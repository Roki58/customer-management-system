import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-print-single',
  templateUrl: './print-single.component.html',
  styleUrls: ['./print-single.component.css']
})
export class PrintSingleComponent implements OnInit {
  customer: Customer | null = null;
  today: Date = new Date();

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(id).subscribe(data => {
      this.customer = data;
    });
  }

  print(): void {
    window.print();
  }
}