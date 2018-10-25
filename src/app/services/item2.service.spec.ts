import { TestBed } from '@angular/core/testing';

import { Item2Service } from './item2.service';

describe('Item2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Item2Service = TestBed.get(Item2Service);
    expect(service).toBeTruthy();
  });
});
