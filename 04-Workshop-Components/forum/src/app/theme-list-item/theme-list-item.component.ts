import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {

  themeList!: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = themeList;
    });
  }

}
