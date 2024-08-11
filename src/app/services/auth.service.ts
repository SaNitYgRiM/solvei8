import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
	{ emailOrPhone: 'test@example.com', password: 'password123' },
	{ emailOrPhone: 'user1@example.com', password: 'password456' },
	{ emailOrPhone: 'user2@example.com', password: 'password789' },
	{ emailOrPhone: '1234567890', password: 'phonepass1' }
  ];

  validateUser(emailOrPhone: string): boolean {
	return this.users.some(user => user.emailOrPhone === emailOrPhone);
  }

  validatePassword(emailOrPhone: string, password: string): boolean {
	return this.users.some(user => user.emailOrPhone === emailOrPhone && user.password === password);
  }

  signUp(emailOrPhone: string, password: string): boolean {
	if (this.validateUser(emailOrPhone)) {
	  return false; // User already exists
	}
	this.users.push({ emailOrPhone, password });
	return true;
  }

  constructor() { }
}