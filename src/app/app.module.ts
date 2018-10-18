import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { B2cprofilesComponent } from './b2cprofiles/b2cprofiles.component';
import { B2cprofileComponent } from './b2cprofile/b2cprofile.component';
import { B2cprofileService } from './_services/b2cprofile.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    HomeComponent,
    B2cprofilesComponent,
    B2cprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    B2cprofileService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
