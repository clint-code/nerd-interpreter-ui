import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubscriptionComponent } from './emailsubscription.component';

describe('EmailsubscriptionComponent', () => {
  let component: EmailsubscriptionComponent;
  let fixture: ComponentFixture<EmailsubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
