import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorLayoutComponent } from './professor-layout.component';

describe('ProfessorLayoutComponent', () => {
  let component: ProfessorLayoutComponent;
  let fixture: ComponentFixture<ProfessorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
