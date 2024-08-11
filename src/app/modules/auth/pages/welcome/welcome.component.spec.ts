import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomeComponent } from './welcome.component';
import { AuthService } from '../../../../services/auth.service';
import { authReducer } from '../../store/auth.reducer';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let mockDataService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ auth: authReducer })
      ],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    mockDataService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit and navigate to login if user exists', () => {
    spyOn(mockDataService, 'validateUser').and.returnValue(true);
    spyOn(component['router'], 'navigate');

    component.welcomeForm.setValue({ emailOrPhone: 'test@example.com' });
    component.onSubmit();

    expect(mockDataService.validateUser).toHaveBeenCalledWith('test@example.com');
    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });
});
