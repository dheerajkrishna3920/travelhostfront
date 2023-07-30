import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcatComponent } from './hotelcat.component';

describe('HotelcatComponent', () => {
  let component: HotelcatComponent;
  let fixture: ComponentFixture<HotelcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
