import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//Componentes
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'


const routes: Routes = [
  {
    path:'',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },

  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
