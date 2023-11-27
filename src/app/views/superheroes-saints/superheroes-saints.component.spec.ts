import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesSaintsComponent } from './superheroes-saints.component';

describe('SuperheroesSaintsComponent', () => {
  let component: SuperheroesSaintsComponent;
  let fixture: ComponentFixture<SuperheroesSaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesSaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesSaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
