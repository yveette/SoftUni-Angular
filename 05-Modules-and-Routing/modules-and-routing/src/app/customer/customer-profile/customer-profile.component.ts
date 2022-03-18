import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  id: number = 0;
  customer!: IUser;
  isLoading: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
    private customerService: CustomerService,
    private titleServie: Title
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        tap(params => {
          this.id = +params['id'];
          // + parse to number
          // this.id = +this.activateRoute.snapshot.params['id'];
          // const id = this.activateRoute.snapshot.paramMap.get('id');

          this.titleServie.setTitle('Profile ' + this.id);
          this.isLoading = true;
        }),
        switchMap(params => {
          return this.customerService.getUserById$(params['id']);
        })
      )
      .subscribe({
        next: user => {
          this.customer = user;
          this.isLoading = false;
        },
        error: error => {
          this.isLoading = false;
          console.error('Error happened', error);
        }
      })
  }
}