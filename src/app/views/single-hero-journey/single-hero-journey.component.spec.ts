import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHeroJourneyComponent } from './single-hero-journey.component';

describe('SingleHeroJourneyComponent', () => {
  let component: SingleHeroJourneyComponent;
  let fixture: ComponentFixture<SingleHeroJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHeroJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHeroJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
