import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorConsultarTurmaLayoutComponent } from './gestor-consultar-turma-layout.component';

describe('GestorConsultarTurmaLayoutComponent', () => {
  let component: GestorConsultarTurmaLayoutComponent;
  let fixture: ComponentFixture<GestorConsultarTurmaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorConsultarTurmaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorConsultarTurmaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
