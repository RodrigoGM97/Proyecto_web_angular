import {DefaultCrudRepository, Filter, Options, repository} from '@loopback/repository';
import {Incidentes, IncidentesRelations, IncidentesWithRelations} from '../models';
import {WebReportesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IncidentesRepository extends DefaultCrudRepository<
  Incidentes,
  typeof Incidentes.prototype.id,
  IncidentesRelations
> {
  constructor(
    @inject('datasources.web_reportes') dataSource: WebReportesDataSource,
  ) {
    super(Incidentes, dataSource);
  }

  public getIncidentesOrgByTipo(tipo_reporte?:string) {
    return this.find({where: {tipo_reporte:tipo_reporte}});
  }

  public getIncidentesOrgByTipoWithDelegacion(tipo_reporte?:string, delegacion?:string) {
    return this.find({where: {tipo_reporte:tipo_reporte, delegacion:delegacion}})
  }

}
