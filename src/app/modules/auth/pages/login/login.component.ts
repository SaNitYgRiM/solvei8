import { Component } from '@angular/core';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.authService.validatePassword(this.emailOrPhone, this.password)) {
      // Redirect to dashboard or home page
      console.log('Login successful');
    } else {
      this.loginError = 'Invalid credentials';
    }
  }
}
