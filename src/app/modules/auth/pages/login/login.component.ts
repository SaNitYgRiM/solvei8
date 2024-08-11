import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  loginError: string = '';
  //public isLoggedIn = false; 

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.emailOrPhone = localStorage.getItem('emailOrPhone') || '';
      console.log(this.emailOrPhone);
    }

  }

  login() {
    this.loginError = '';
    if (this.emailOrPhone && this.password) {
      if (this.authService.validatePassword(this.emailOrPhone, this.password)) {
        console.log('Login successful');
        //this.isLoggedIn = true;
        
        this.router.navigate(['/logged-in']);
      } else {
        this.loginError = 'Incorrect Password. Please try again';
      }
    } else {
      this.loginError = 'Please enter password';
    }
  }
}