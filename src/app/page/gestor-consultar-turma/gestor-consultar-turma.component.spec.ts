import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorConsultarTurmaComponent } from './gestor-consultar-turma.component';

describe('GestorConsultarTurmaComponent', () => {
  let component: GestorConsultarTurmaComponent;
  let fixture: ComponentFixture<GestorConsultarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorConsultarTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorConsultarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
