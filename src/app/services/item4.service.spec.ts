import { TestBed } from '@angular/core/testing';

import { Item4Service } from './item4.service';

describe('Item4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Item4Service = TestBed.get(Item4Service);
    expect(service).toBeTruthy();
  });
});
