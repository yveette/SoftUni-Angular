import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DieselEngine, Engine, PetrolEngine } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CustomForms } from './custom-forms/custom-forms.module';

export const ENGINE_TOKEN = new InjectionToken('Services for engine');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DefaultViewComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CustomForms,
    CustomerModule,
  ],
  providers: [
    {
      provide: ENGINE_TOKEN,
      useClass: PetrolEngine,
      multi: true
    },
    {
      provide: ENGINE_TOKEN,
      useClass: DieselEngine,
      multi: true // makes array of providers, if false -> overwrite
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
