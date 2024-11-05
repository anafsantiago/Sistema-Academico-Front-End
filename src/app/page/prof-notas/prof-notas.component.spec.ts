import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfNotasComponent } from './prof-notas.component';

describe('ProfNotasComponent', () => {
  let component: ProfNotasComponent;
  let fixture: ComponentFixture<ProfNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
