import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfNotasLayoutComponent } from './prof-notas-layout.component';

describe('ProfNotasLayoutComponent', () => {
  let component: ProfNotasLayoutComponent;
  let fixture: ComponentFixture<ProfNotasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfNotasLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfNotasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
