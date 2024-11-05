import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFrequenciaComponent } from './prof-frequencia.component';

describe('ProfFrequenciaComponent', () => {
  let component: ProfFrequenciaComponent;
  let fixture: ComponentFixture<ProfFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfFrequenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
