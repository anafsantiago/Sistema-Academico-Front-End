import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFrequenciaLayoutComponent } from './prof-frequencia-layout.component';

describe('ProfFrequenciaLayoutComponent', () => {
  let component: ProfFrequenciaLayoutComponent;
  let fixture: ComponentFixture<ProfFrequenciaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfFrequenciaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfFrequenciaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
