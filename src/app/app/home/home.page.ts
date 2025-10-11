import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonService } from '../services/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedModule],
})
export class HomePage {
  constructor(private commonService: CommonService) {}

  loginType: string = 'patient';
  email: string = '';
  password: string = '';



   segmentChanged(event: any) {
    this.loginType = event.detail.value;
  }

  onLogin() {
    console.log('Login clicked', {
      type: this.loginType,
      email: this.email,
      password: this.password
    });
    this.commonService.router.navigate(['/dr-dashboard'])
    // Add your login logic here
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    // Add navigation to forgot password page
  }

  onSignUp() {
    console.log('Sign up clicked');
    // Add navigation to sign up page
  }
}
