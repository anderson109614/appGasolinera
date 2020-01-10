import { TestBed } from '@angular/core/testing';

import { IslasService } from './islas.service';

describe('IslasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IslasService = TestBed.get(IslasService);
    expect(service).toBeTruthy();
  });
});
