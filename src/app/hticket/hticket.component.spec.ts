import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HticketComponent } from './hticket.component';

describe('HticketComponent', () => {
  let component: HticketComponent;
  let fixture: ComponentFixture<HticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
