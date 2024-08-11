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
  allowedOrganizations: string[] = ['Org1', 'Org2', 'Org3']; // Mocked allowed organizations
  designations: string[] = ['Manager', 'Developer', 'Designer']; // Mocked designations
  signUpError: string = ''; // Define signUpError property

  constructor(private router: Router) {}

  ngOnInit() {
    // Load data from localStorage if available
    const step2Data = JSON.parse(localStorage.getItem('signupStep2') || '{}');
    if (step2Data) {
      this.organizationName = step2Data.organizationName || '';
      this.designation = step2Data.designation || '';
      this.birthDate = step2Data.birthDate || '';
      this.city = step2Data.city || '';
      this.pincode = step2Data.pincode || '';
    }
  }

  back() {
    // Store current form data in localStorage
    const step2Data = {
      organizationName: this.organizationName,
      designation: this.designation,
      birthDate: this.birthDate,
      city: this.city,
      pincode: this.pincode
    };
    localStorage.setItem('signupStep2', JSON.stringify(step2Data));
    this.router.navigate(['/signup-step1']);
  }

  submit() {
    this.signUpError = ''; // Reset error message
    if (this.allowedOrganizations.includes(this.organizationName) && /^\d{6}$/.test(this.pincode)) {
      // Submit the form data
      console.log('Form submitted');
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