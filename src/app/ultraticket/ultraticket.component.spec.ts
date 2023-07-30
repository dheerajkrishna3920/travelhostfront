import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraticketComponent } from './ultraticket.component';

describe('UltraticketComponent', () => {
  let component: UltraticketComponent;
  let fixture: ComponentFixture<UltraticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltraticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltraticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
