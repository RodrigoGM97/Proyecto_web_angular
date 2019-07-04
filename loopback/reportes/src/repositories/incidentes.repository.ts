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

  //Devuelve los incidentes con base en el tipo de reporte, delegación, colonia y fecha, regresa todos los campos
  public getIncidentesOrgWithDelAndColAndFecha(tipo_reporte:string, delegacion:string, colonia:string, fecha:string) {
    return this.find({where: {tipo_reporte:tipo_reporte, delegacion:delegacion, colonia:colonia, fecha:fecha}})
  }

  //Devuelve los incidentes de luz y de agua por delegación, colonia y fecha
  public getIncidentesAdmin(delegacion:string, colonia:string, fecha:string) {
    return this.find({where: {delegacion:delegacion, colonia:colonia, fecha:fecha}})
  }

  //Devuelve los incidentes de luz y de agua reportados por el usuario (se busca por curp)
  public getIncidentesUser(delegacion:string, colonia:string, fecha:string, curp:string) {
    return this.find({where: {delegacion:delegacion, colonia:colonia, fecha:fecha, curp:curp}});
  }

  public createIncidente( nuevoRegistro: Object) {
    return this.create(nuevoRegistro);
  }
}
