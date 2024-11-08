import { TestBed } from '@angular/core/testing';

import { FichaIndividualService } from './ficha-individual.service';

describe('FichaIndividualService', () => {
  let service: FichaIndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaIndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
