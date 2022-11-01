import { TestBed } from '@angular/core/testing';

import { CharacterdataService } from './characterdata.service';

describe('CharacterdataService', () => {
  let service: CharacterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
