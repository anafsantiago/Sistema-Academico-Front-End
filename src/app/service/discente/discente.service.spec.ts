import { TestBed } from '@angular/core/testing';

import { DiscenteService } from './discente.service';

describe('DiscenteService', () => {
  let service: DiscenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
