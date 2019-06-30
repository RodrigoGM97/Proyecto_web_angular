import {DefaultCrudRepository} from '@loopback/repository';
import {Incidentes, IncidentesRelations} from '../models';
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
}
