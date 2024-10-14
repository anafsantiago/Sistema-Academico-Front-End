import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {PrincipalComponent} from './component/principal/principal.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
];
