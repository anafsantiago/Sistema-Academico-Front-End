import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorVisualizarRelatorioProfComponent } from './gestor-visualizar-relatorio-prof.component';

describe('GestorVisualizarRelatorioProfComponent', () => {
  let component: GestorVisualizarRelatorioProfComponent;
  let fixture: ComponentFixture<GestorVisualizarRelatorioProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorVisualizarRelatorioProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorVisualizarRelatorioProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
