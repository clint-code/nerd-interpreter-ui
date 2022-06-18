import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSliderComponent } from './comic-slider.component';

describe('ComicSliderComponent', () => {
  let component: ComicSliderComponent;
  let fixture: ComponentFixture<ComicSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
