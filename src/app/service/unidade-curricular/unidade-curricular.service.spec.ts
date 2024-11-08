import { TestBed } from '@angular/core/testing';

import { UnidadeCurricularService } from './unidade-curricular.service';

describe('UnidadeCurricularService', () => {
  let service: UnidadeCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
