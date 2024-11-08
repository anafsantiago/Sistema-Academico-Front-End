import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConsolidarComponent } from './dialogo-consolidar.component';

describe('DialogoConsolidarComponent', () => {
  let component: DialogoConsolidarComponent;
  let fixture: ComponentFixture<DialogoConsolidarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoConsolidarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoConsolidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
