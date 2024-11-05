import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRelatoriosLayoutComponent } from './prof-relatorios-layout.component';

describe('ProfRelatoriosLayoutComponent', () => {
  let component: ProfRelatoriosLayoutComponent;
  let fixture: ComponentFixture<ProfRelatoriosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfRelatoriosLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfRelatoriosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
