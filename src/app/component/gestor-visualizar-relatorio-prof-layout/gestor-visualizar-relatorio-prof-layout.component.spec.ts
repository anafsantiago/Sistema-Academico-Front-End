import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorVisualizarRelatorioProfLayoutComponent } from './gestor-visualizar-relatorio-prof-layout.component';

describe('GestorVisualizarRelatorioProfLayoutComponent', () => {
  let component: GestorVisualizarRelatorioProfLayoutComponent;
  let fixture: ComponentFixture<GestorVisualizarRelatorioProfLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorVisualizarRelatorioProfLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorVisualizarRelatorioProfLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
