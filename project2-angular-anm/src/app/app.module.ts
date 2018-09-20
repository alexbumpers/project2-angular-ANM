import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MyProfileComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
