import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioDataComponent } from './horario-data.component';

describe('HorarioDataComponent', () => {
  let component: HorarioDataComponent;
  let fixture: ComponentFixture<HorarioDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
