import { TestBed } from '@angular/core/testing';

import { Item3Service } from './item3.service';

describe('Item3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Item3Service = TestBed.get(Item3Service);
    expect(service).toBeTruthy();
  });
});
