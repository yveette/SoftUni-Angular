import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService, IPost } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerPostsResolver implements Resolve<IPost[]> {
  constructor(private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> {
    return this.customerService.getPostsByUserId$(route.parent!.params['id']);
  }
}