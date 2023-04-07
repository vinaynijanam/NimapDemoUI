import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserprofiletamplateComponent } from './userprofiletamplate/userprofiletamplate.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserregistrationComponent,
    UserprofiletamplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
