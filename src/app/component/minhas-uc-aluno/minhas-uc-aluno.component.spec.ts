import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasUcAlunoComponent } from './minhas-uc-aluno.component';

describe('MinhasUcAlunoComponent', () => {
  let component: MinhasUcAlunoComponent;
  let fixture: ComponentFixture<MinhasUcAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasUcAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasUcAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
