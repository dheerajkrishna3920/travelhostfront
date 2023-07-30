import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdtickComponent } from './stdtick.component';

describe('StdtickComponent', () => {
  let component: StdtickComponent;
  let fixture: ComponentFixture<StdtickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdtickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdtickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
