import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressOnscrollbarComponent } from './progress-onscrollbar.component';

describe('ProgressOnscrollbarComponent', () => {
  let component: ProgressOnscrollbarComponent;
  let fixture: ComponentFixture<ProgressOnscrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressOnscrollbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressOnscrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
