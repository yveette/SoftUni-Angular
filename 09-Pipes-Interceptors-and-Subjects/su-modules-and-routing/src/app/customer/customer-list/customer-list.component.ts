import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  text = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('show some text');
    }, 3000)
  })

  customers: IUser[] = [];
  private subscription!: Subscription;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.subscription = this.customerService.getUsers$().subscribe(users => {
      this.customers = users;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
