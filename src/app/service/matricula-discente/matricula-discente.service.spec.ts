import { TestBed } from '@angular/core/testing';

import { MatriculaDiscenteService } from './matricula-discente.service';

describe('MatriculaDiscenteService', () => {
  let service: MatriculaDiscenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaDiscenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
