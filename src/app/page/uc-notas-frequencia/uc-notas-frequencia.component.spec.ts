import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcNotasFrequenciaComponent } from './uc-notas-frequencia.component';

describe('UcNotasFrequenciaComponent', () => {
  let component: UcNotasFrequenciaComponent;
  let fixture: ComponentFixture<UcNotasFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcNotasFrequenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcNotasFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
