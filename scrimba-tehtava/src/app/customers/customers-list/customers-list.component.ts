import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { SorterService } from 'src/app/core/sorter.service';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[] {
        return this._customers; 
    }

    set customers(value: ICustomer[]){
        if(value){
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }


    filteredCustomers: any[] = [];
    customersOrderTotal: number | undefined;
    currencyCode: string = 'USD';

    constructor( private sorterService: SorterService){}

    ngOnInit(){
  
    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal! += cust.orderTotal!;
            });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal!.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string){
        // A sorter service will handle the sorting 
        this.sorterService.sort(this.filteredCustomers, prop)
    }

}