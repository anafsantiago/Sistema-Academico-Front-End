import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAlocacoesAlunosComponent } from './gerenciar-alocacoes-alunos.component';

describe('GerenciarAlocacoesAlunosComponent', () => {
  let component: GerenciarAlocacoesAlunosComponent;
  let fixture: ComponentFixture<GerenciarAlocacoesAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarAlocacoesAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarAlocacoesAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
