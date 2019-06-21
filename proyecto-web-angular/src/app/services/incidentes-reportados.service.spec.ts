import { TestBed } from '@angular/core/testing';

import { IncidentesReportadosService } from './incidentes-reportados.service';

describe('IncidentesReportadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidentesReportadosService = TestBed.get(IncidentesReportadosService);
    expect(service).toBeTruthy();
  });
});
