import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorVisualizarRelatorioAlunoComponent } from './gestor-visualizar-relatorio-aluno.component';

describe('GestorVisualizarRelatorioAlunoComponent', () => {
  let component: GestorVisualizarRelatorioAlunoComponent;
  let fixture: ComponentFixture<GestorVisualizarRelatorioAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorVisualizarRelatorioAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorVisualizarRelatorioAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
