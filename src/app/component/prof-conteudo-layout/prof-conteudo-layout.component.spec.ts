import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfConteudoLayoutComponent } from './prof-conteudo-layout.component';

describe('ProfConteudoLayoutComponent', () => {
  let component: ProfConteudoLayoutComponent;
  let fixture: ComponentFixture<ProfConteudoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfConteudoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfConteudoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
