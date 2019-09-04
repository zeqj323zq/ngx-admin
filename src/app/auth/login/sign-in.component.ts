import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'sign-in',
  templateUrl: `<button nbButton
  type="submit"
  fullWidth
  status="success"
  [disabled]="submitted || !form.valid"
  [class.btn-pulse]="submitted"
  (click)="SignIn">
登录
</button>`
})

export class SignInComponent {
    
}