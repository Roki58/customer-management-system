import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PrintSingleComponent } from './components/print-single/print-single.component';
import { PrintTableComponent } from './components/print-table/print-table.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    PrintSingleComponent,
    PrintTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }