import { TestBed, inject } from '@angular/core/testing';

import { AccuWeatherService } from './accu-weather.service';

describe('AccuWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccuWeatherService]
    });
  });

  it('should be created', inject([AccuWeatherService], (service: AccuWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
