import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfConteudoComponent } from './prof-conteudo.component';

describe('ProfConteudoComponent', () => {
  let component: ProfConteudoComponent;
  let fixture: ComponentFixture<ProfConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfConteudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
