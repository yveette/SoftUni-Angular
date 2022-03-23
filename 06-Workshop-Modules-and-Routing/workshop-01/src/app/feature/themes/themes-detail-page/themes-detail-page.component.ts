import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-themes-detail-page',
  templateUrl: './themes-detail-page.component.html',
  styleUrls: ['./themes-detail-page.component.css']
})
export class ThemesDetailPageComponent implements OnInit {

  theme: ITheme;
  isLoggedIn: boolean = this.userService.isLogged;
  canSubscribe: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private userService: UserService) { }

  ngOnInit(): void {
    // get param once!
    // const themeId = this.activatedRoute.snapshot.params['themeId'];
    // this.themeService.loadThemeById(themeId).subscribe(theme => {
    //   this.theme = theme;
    // });

    // get changed param in url
    this.activatedRoute.params.subscribe(params => {
      const themeId = params['themeId'];
      this.themeService.loadThemeById(themeId).subscribe(theme => {
        this.theme = theme;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
      })
    })
  }

}
