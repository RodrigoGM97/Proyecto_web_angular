import { TestBed } from '@angular/core/testing';

import { GrafUsuarioPrincService } from './graf-usuario-princ.service';

describe('GrafUsuarioPrincService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrafUsuarioPrincService = TestBed.get(GrafUsuarioPrincService);
    expect(service).toBeTruthy();
  });
});
