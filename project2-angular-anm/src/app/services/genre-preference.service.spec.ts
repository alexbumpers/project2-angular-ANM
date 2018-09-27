import { TestBed } from '@angular/core/testing';

import { GenrePreferenceService } from './genre-preference.service';

describe('GenrePreferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenrePreferenceService = TestBed.get(GenrePreferenceService);
    expect(service).toBeTruthy();
  });
});
