import { TestBed } from '@angular/core/testing';

import { AlocacaoDiscenteService } from './alocacao-discente.service';

describe('AlocacaoDiscenteService', () => {
  let service: AlocacaoDiscenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlocacaoDiscenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
