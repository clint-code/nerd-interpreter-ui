import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSuperheroSaintViewComponent } from './single-superhero-saint-view.component';

describe('SingleSuperheroSaintViewComponent', () => {
  let component: SingleSuperheroSaintViewComponent;
  let fixture: ComponentFixture<SingleSuperheroSaintViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSuperheroSaintViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSuperheroSaintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
