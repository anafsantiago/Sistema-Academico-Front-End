import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasFrequenciaLayoutComponent } from './notas-frequencia-layout.component';

describe('NotasFrequenciaLayoutComponent', () => {
  let component: NotasFrequenciaLayoutComponent;
  let fixture: ComponentFixture<NotasFrequenciaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasFrequenciaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasFrequenciaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
