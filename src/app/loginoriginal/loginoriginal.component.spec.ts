import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoriginalComponent } from './loginoriginal.component';

describe('LoginoriginalComponent', () => {
  let component: LoginoriginalComponent;
  let fixture: ComponentFixture<LoginoriginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginoriginalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginoriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
