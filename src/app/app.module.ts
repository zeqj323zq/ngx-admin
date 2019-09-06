/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { AuthGuard } from './auth-guard.service';
import { NbPasswordAuthStrategy, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

const formSetting: any = {
  strategy: 'email',
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          // clientId: 'YOUR_CLIENT_ID',
          // clientSecret: '',
          // authorize: {
          //   endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
          //   responseType: NbOAuth2ResponseType.TOKEN,
          //   scope: 'https://www.googleapis.com/auth/userinfo.profile',
          // },

          // redirectUri: 'http://localhost:4100/example/oauth2/callback',
          
          baseEndpoint: 'http://192.168.212.223:9999/winstore/api', //http访问请求
          login: {
            endpoint: '/user/login',
            method: 'post',
            redirect: {
              success: '/pages/dashboard',
              failure: null, // 停留在原页面
            },
          },
          register: {
            endpoint: '/user',
            method: 'post',
            redirect: {
              success: '/auth/login',
              failure: null, // 停留在原页面
            },
          },
          logout: {
            endpoint: '/user',
            method: 'delete',
            redirect: {
              success: '/auth/login',
              failure: null, // 停留在原页面
            },
          },
          requestPass: {
            endpoint: '/user/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/user/reset-pass',
            method: 'post',
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          }
        }),
      ],
          forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
          },
          validation: {
            password: {
              required: true,
              minLength: 4,
              maxLength: 50,
            },
            email: {
              required: true,
            },
            name: {
              required: false,
              minLength: 4,
              maxLength: 50,
            },
          }
        }
    })
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppModule {
}
