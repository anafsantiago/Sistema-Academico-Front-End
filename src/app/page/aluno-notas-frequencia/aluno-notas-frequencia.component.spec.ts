import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNotasFrequenciaComponent } from './aluno-notas-frequencia.component';

describe('AlunoNotasFrequenciaComponent', () => {
  let component: AlunoNotasFrequenciaComponent;
  let fixture: ComponentFixture<AlunoNotasFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoNotasFrequenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoNotasFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
