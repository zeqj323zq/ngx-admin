import { NbLoginComponent } from '@nebular/auth';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth';
import { Serializer } from '@angular/compiler';

@Component({
  moduleId: module.id,
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              protected httpClient: HttpClient,
              ){

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    // const httpOptions = { headers: new HttpHeaders({ 'content-type': 'application/json;charset=UTF-8'}), withCredentials: true };
    //     this.httpClient.post('http://192.168.212.223:9999/winstore/api/user/login',this.user, httpOptions )
    //         .subscribe(
    //             response => {
    //               console.log(response);
    //             },error => {
    //               this.errors = error;
    //               console.log(error);
    //             }
    //         );
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  model = this.user;
  get diagnostic() { return JSON.stringify(this.model); }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}