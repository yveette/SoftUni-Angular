import { Component, Inject, Injectable } from '@angular/core';
import { ENGINE_TOKEN } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-and-routing';

  // add only needed providers with same token
  constructor (@Inject(ENGINE_TOKEN) private engine: Engine[]){
    console.log(this.engine)
  }
}


export abstract class Engine {
}

@Injectable()
export class PetrolEngine extends Engine {
}

@Injectable()
export class DieselEngine extends Engine {
}
