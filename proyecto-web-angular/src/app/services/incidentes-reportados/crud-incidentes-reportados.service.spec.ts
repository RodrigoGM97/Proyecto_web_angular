import { TestBed } from '@angular/core/testing';

import { CrudIncidentesReportadosService } from './crud-incidentes-reportados.service';

describe('CrudIncidentesReportadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudIncidentesReportadosService = TestBed.get(CrudIncidentesReportadosService);
    expect(service).toBeTruthy();
  });
});
