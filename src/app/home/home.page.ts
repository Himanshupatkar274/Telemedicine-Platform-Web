import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonService } from '../services/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class HomeComponent {
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
