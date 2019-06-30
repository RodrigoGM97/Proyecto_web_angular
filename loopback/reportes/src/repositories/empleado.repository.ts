import {DefaultCrudRepository} from '@loopback/repository';
import {Empleado, EmpleadoRelations} from '../models';
import {WebReportesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.web_reportes') dataSource: WebReportesDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
