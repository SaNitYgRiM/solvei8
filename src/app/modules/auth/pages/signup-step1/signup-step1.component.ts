import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.css']
})
export class SignupStep1Component implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
	// Load data from localStorage if available
	const step1Data = JSON.parse(localStorage.getItem('signupStep1') || '{}');
	if (step1Data) {
	  this.firstName = step1Data.firstName || '';
	  this.lastName = step1Data.lastName || '';
	  this.email = step1Data.email || '';
	}
  }

  continue() {
	// Store current form data in localStorage
	const step1Data = {
	  firstName: this.firstName,
	  lastName: this.lastName,
	  email: this.email
	};
	localStorage.setItem('signupStep1', JSON.stringify(step1Data));
	this.router.navigate(['/signup-step2']);
  }
}