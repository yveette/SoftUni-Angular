import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer!: IUser;

  constructor(private activateRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    // const id = this.activateRoute.snapshot.paramMap.get('id');

    this.customerService.getUserById$(id).subscribe(user => {
      this.customer = user;
    })

  }

}
