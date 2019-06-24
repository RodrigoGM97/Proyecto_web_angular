import { TestBed } from '@angular/core/testing';

import { AdminEmpleadosService } from './admin-empleados.service';

describe('AdminEmpleadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminEmpleadosService = TestBed.get(AdminEmpleadosService);
    expect(service).toBeTruthy();
  });
});
