import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAlocacoesProfessoresComponent } from './gerenciar-alocacoes-professores.component';

describe('GerenciarAlocacoesProfessoresComponent', () => {
  let component: GerenciarAlocacoesProfessoresComponent;
  let fixture: ComponentFixture<GerenciarAlocacoesProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarAlocacoesProfessoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarAlocacoesProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
