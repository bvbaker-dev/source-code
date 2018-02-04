import { TestBed, inject } from '@angular/core/testing';

import { AccuWeatherServiceService } from './accu-weather-service.service';

describe('AccuWeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccuWeatherServiceService]
    });
  });

  it('should be created', inject([AccuWeatherServiceService], (service: AccuWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
