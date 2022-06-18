import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCharactersComponent } from './dc-characters.component';

describe('DcCharactersComponent', () => {
  let component: DcCharactersComponent;
  let fixture: ComponentFixture<DcCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
