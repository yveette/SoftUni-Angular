import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn;

  constructor(public authService: AuthService, private router: Router) {

  }

  logoutHandler(): void {
    // TODO: disable logout to be clicked more than once
    // console.log('logout called');
    this.authService.logout$().subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
