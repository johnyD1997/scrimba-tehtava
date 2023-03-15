import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title!: string;
  people!: any[];
 
  constructor( private dataService: DataService){}

  ngOnInit(){
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[])=> this.people = customers)
    // this.people = [
    //   { id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date (2014, 7, 10) },
    //   { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date (2015, 11, 8) },
    //   { id: 3, name: 'Michel Doe', city: 'Seattle', orderTotal: 29.99, customerSince: new Date (2017, 23, 11) },
    //   { id: 4, name: 'Patrick Jane', city: 'Sacramento', orderTotal: 39.99, customerSince: new Date (2019, 12, 1) },
    // ]
  }

}
