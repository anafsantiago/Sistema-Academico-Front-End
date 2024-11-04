import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcConteudoComponent } from './uc-conteudo.component';

describe('UcConteudoComponent', () => {
  let component: UcConteudoComponent;
  let fixture: ComponentFixture<UcConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcConteudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
