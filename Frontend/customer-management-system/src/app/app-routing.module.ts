import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PrintSingleComponent } from './components/print-single/print-single.component';
import { PrintTableComponent } from './components/print-table/print-table.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'print/:id', component: PrintSingleComponent },
  { path: 'print-table', component: PrintTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }