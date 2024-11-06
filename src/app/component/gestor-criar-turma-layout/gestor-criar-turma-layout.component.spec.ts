import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCriarTurmaLayoutComponent } from './gestor-criar-turma-layout.component';

describe('GestorCriarTurmaLayoutComponent', () => {
  let component: GestorCriarTurmaLayoutComponent;
  let fixture: ComponentFixture<GestorCriarTurmaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorCriarTurmaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorCriarTurmaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
