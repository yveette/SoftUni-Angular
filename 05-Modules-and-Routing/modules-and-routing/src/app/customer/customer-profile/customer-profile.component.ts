import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer!: IUser;
  isLoading: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
    private customerService: CustomerService,
    private titleServie: Title
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    // const id = this.activateRoute.snapshot.paramMap.get('id');

    this.titleServie.setTitle('Profile ' + id);

    this.isLoading = true;
    this.customerService.getUserById$(id).subscribe(user => {
      this.customer = user;
      this.isLoading = false;
    })

  }

}
