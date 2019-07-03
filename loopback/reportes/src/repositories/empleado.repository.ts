import {DefaultCrudRepository, Filter, Options, repository} from '@loopback/repository';
import {WebReportesDataSource} from '../datasources';
import {inject} from '@loopback/core';

import {Empleado, EmpleadoRelations, EmpleadoWithRelations} from '../models';

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

  public findByOrg(organizacion?: string) {
    return this.find({where: {organizacion:organizacion}});
  }

  public getEmpleados(organizacion?: string) {
    return this.find({fields: {id:true, nombre_completo:true, usuario:true, foto_url:true, organizacion:true}, where:{organizacion:organizacion}});
  }
}
