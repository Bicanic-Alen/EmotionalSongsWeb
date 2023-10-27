import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistratiComponent } from './login-registrati.component';

describe('LoginRegistratiComponent', () => {
  let component: LoginRegistratiComponent;
  let fixture: ComponentFixture<LoginRegistratiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegistratiComponent]
    });
    fixture = TestBed.createComponent(LoginRegistratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
