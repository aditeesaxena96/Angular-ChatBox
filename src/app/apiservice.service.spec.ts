import { TestBed, inject } from '@angular/core/testing';

import { APIserviceService } from './apiservice.service';

describe('APIserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIserviceService]
    });
  });

  it('should be created', inject([APIserviceService], (service: APIserviceService) => {
    expect(service).toBeTruthy();
  }));
});
