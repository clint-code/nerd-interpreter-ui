import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharactersComponent } from './marvel-characters.component';

describe('MarvelCharactersComponent', () => {
  let component: MarvelCharactersComponent;
  let fixture: ComponentFixture<MarvelCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
