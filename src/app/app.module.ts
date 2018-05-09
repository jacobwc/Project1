import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HomeComponent} from '././home/home.component';
import {ContactComponent } from '././contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent   
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
