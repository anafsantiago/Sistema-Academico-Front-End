import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCriarTurmaComponent } from './gestor-criar-turma.component';

describe('GestorCriarTurmaComponent', () => {
  let component: GestorCriarTurmaComponent;
  let fixture: ComponentFixture<GestorCriarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorCriarTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorCriarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
