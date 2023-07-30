import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelticketComponent } from './hotelticket.component';

describe('HotelticketComponent', () => {
  let component: HotelticketComponent;
  let fixture: ComponentFixture<HotelticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
