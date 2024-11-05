import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestorComponent } from './home-gestor.component';

describe('HomeGestorComponent', () => {
  let component: HomeGestorComponent;
  let fixture: ComponentFixture<HomeGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGestorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
