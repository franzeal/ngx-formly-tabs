import { TestBed, inject } from '@angular/core/testing';

import { TabsetService } from './tabset.service';

describe('TabsetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabsetService]
    });
  });

  it('should be created', inject([TabsetService], (service: TabsetService) => {
    expect(service).toBeTruthy();
  }));
});
