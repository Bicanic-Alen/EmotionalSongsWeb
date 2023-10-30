import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegistratiComponent } from './login-registrati/login-registrati.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { RegistraComponent } from './registra/registra.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : SearchComponent},
  { path: 'login_registrati', component : LoginRegistratiComponent},
  { path: 'playlist', component : PlaylistComponent},
  { path: 'registra', component : RegistraComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
