import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrls: ['./signup-step2.component.css']
})
export class SignupStep2Component implements OnInit {
  organizationName: string = '';
  designation: string = '';
  birthDate: string = '';
  city: string = '';
  pincode: string = '';
  allowedOrganizations: string[] = ['Org1', 'Org2', 'Org3','Org4'];
  designations: string[] = ['designation1', 'designation2', 'designation3'];
  signUpError: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const step2Data = JSON.parse(localStorage.getItem('signupStep2') || '{}');
      if (step2Data) {
        this.organizationName = step2Data.organizationName || '';
        this.designation = step2Data.designation || '';
        this.birthDate = step2Data.birthDate || '';
        this.city = step2Data.city || '';
        this.pincode = step2Data.pincode || '';
      }
    }
  }

  back() {
    if (typeof localStorage !== 'undefined') {
      const step2Data = {
        organizationName: this.organizationName,
        designation: this.designation,
        birthDate: this.birthDate,
        city: this.city,
        pincode: this.pincode
      };
      localStorage.setItem('signupStep2', JSON.stringify(step2Data));
    }
    this.router.navigate(['/signup-step1']);
  }

  clearLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('signupStep1');
      localStorage.removeItem('signupStep2');
    }
  }

  submit() {
    if (!this.city || !this.birthDate || !this.pincode) {
      this.signUpError = 'All fields are required';
      return;
    }

    this.signUpError = '';
    if (this.allowedOrganizations.includes(this.organizationName) && /^\d{6}$/.test(this.pincode)) {
      console.log('Form submitted');
      localStorage.clear();
      this.router.navigate(['/login']);

    } else {
      if (!this.allowedOrganizations.includes(this.organizationName)) {
        this.signUpError = 'Unknown organization-id';
      }
      if (!/^\d{6}$/.test(this.pincode)) {
        this.signUpError = 'Invalid pincode';
      }
    }
  }
}