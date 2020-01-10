import { TestBed } from '@angular/core/testing';

import { CombustiblesService } from './combustibles.service';

describe('CombustiblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombustiblesService = TestBed.get(CombustiblesService);
    expect(service).toBeTruthy();
  });
});
