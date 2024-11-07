import { TestBed } from '@angular/core/testing';

import { AlocacaoDocenteService } from './alocacao-docente.service';

describe('AlocacaoDocenteService', () => {
  let service: AlocacaoDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlocacaoDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
