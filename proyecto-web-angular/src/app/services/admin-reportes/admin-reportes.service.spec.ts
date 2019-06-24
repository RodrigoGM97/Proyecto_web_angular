import { TestBed } from '@angular/core/testing';

import { AdminReportesService } from './admin-reportes.service';

describe('AdminReportesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminReportesService = TestBed.get(AdminReportesService);
    expect(service).toBeTruthy();
  });
});
