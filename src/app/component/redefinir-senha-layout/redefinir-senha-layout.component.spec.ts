import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinirSenhaLayoutComponent } from './redefinir-senha-layout.component';

describe('RedefinirSenhaLayoutComponent', () => {
  let component: RedefinirSenhaLayoutComponent;
  let fixture: ComponentFixture<RedefinirSenhaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedefinirSenhaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedefinirSenhaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
