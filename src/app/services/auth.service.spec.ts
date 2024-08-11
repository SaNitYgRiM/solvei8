import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('MockDataService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate user correctly', () => {
    const emailOrPhone = 'test@example.com';
    const result = service.validateUser(emailOrPhone);
    expect(result).toBe(true); // Adjust the expected result based on your logic
  });
});
