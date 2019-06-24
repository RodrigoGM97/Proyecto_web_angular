import { TestBed } from '@angular/core/testing';

import { UsuarioReportesService } from './usuario-reportes.service';

describe('UsuarioReportesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioReportesService = TestBed.get(UsuarioReportesService);
    expect(service).toBeTruthy();
  });
});
