import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'

import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRegisterComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent,
  } from '@nebular/auth';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    // .. 路由组件
    {
      path: '',
      component: NbAuthComponent,
      children: [
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
        // {
        //   path: '',
        //   component: NbOAuth2LoginComponent,
        // },
        // {
        //   path: 'callback',
        //   component: NbOAuth2CallbackComponent,
        // },
        // {
        //   path: '**',
        //   redirectTo: 'auth',
        //   pathMatch: 'full',
        // },
    ]
    }
  ];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule {
}