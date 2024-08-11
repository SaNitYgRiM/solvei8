
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../store/auth.state';
import * as AuthActions from '../../store/auth.actions';
import { selectUserExists } from '../../store/auth.selectors';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public welcomeForm: FormGroup;
  emailOrPhone: string = '';
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.welcomeForm = this.fb.group({
      emailOrPhone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log('Form submitted'); // Debug log

    if (this.welcomeForm.invalid) {
      console.log('Form is invalid'); 
      return;
    }

    const identifier = this.welcomeForm.get('emailOrPhone')?.value;
    console.log('Dispatching validateUser action with identifier:', identifier); 
    this.store.dispatch(AuthActions.validateUser({ identifier }));


    this.store.select(selectUserExists).subscribe(exists => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('emailOrPhone',identifier);
      }
      console.log('User exists:', exists); 
      if (exists) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/signup-step1']);
      }
    });
  }
}