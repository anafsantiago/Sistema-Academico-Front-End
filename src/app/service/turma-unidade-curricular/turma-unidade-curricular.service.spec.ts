import { TestBed } from '@angular/core/testing';

import { TurmaUnidadeCurricularService } from './turma-unidade-curricular.service';

describe('TurmaUnidadeCurricularService', () => {
  let service: TurmaUnidadeCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaUnidadeCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
