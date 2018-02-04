import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveHourDisplayComponent } from './twelve-hour-display.component';

describe('TwelveHourDisplayComponent', () => {
  let component: TwelveHourDisplayComponent;
  let fixture: ComponentFixture<TwelveHourDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveHourDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveHourDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
