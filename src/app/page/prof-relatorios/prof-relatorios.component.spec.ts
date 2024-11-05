import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRelatoriosComponent } from './prof-relatorios.component';

describe('ProfRelatoriosComponent', () => {
  let component: ProfRelatoriosComponent;
  let fixture: ComponentFixture<ProfRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfRelatoriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
