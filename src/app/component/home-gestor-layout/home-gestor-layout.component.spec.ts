import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestorLayoutComponent } from './home-gestor-layout.component';

describe('HomeGestorLayoutComponent', () => {
  let component: HomeGestorLayoutComponent;
  let fixture: ComponentFixture<HomeGestorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGestorLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGestorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
