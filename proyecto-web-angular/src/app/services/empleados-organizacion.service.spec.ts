import { TestBed } from '@angular/core/testing';

import { EmpleadosOrganizacionService } from './empleados-organizacion.service';

describe('EmpleadosOrganizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleadosOrganizacionService = TestBed.get(EmpleadosOrganizacionService);
    expect(service).toBeTruthy();
  });
});
