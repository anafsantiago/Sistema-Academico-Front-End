import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorVisualizarRelatorioAlunoLayoutComponent } from './gestor-visualizar-relatorio-aluno-layout.component';

describe('GestorVisualizarRelatorioAlunoLayoutComponent', () => {
  let component: GestorVisualizarRelatorioAlunoLayoutComponent;
  let fixture: ComponentFixture<GestorVisualizarRelatorioAlunoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorVisualizarRelatorioAlunoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorVisualizarRelatorioAlunoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
