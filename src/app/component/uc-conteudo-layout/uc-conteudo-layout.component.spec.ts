import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcConteudoLayoutComponent } from './uc-conteudo-layout.component';

describe('UcConteudoLayoutComponent', () => {
  let component: UcConteudoLayoutComponent;
  let fixture: ComponentFixture<UcConteudoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcConteudoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcConteudoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
