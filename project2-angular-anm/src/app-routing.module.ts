import { SpotifyAuthComponent } from './app/components/spotify-auth/spotify-auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MyProfileComponent } from './app/components/my-profile/my-profile.component';
import { SpotifyServiceTestComponent } from './app/components/spotify-service-test/spotify-service-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit', component: MyProfileComponent },
  { path: 'spotifytest', component: SpotifyServiceTestComponent},
  { path: 'spotifyAuth', component: SpotifyAuthComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
