import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConditionsDisplayComponent } from './current-conditions-display.component';

describe('CurrentConditionsDisplayComponent', () => {
  let component: CurrentConditionsDisplayComponent;
  let fixture: ComponentFixture<CurrentConditionsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentConditionsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentConditionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
