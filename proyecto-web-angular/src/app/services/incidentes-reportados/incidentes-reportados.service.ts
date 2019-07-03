import { Injectable } from '@angular/core';
import { CrudIncidentesReportadosService} from './crud-incidentes-reportados.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncidentesReportadosService{

  ///////////////////////////////////////////////////////
  endpoint="http://localhost:3000/empleados/admin"

  constructor() { }

  ngOnInit() {  }
  
  getIncidentes() {
    return [
      {
        id:"34861957",
        comentario:"Se cayó un poste de luz",
        estado: "reportado"
      },
      {
        id:"26675657",
        comentario:"Se quemó un transformador",
        estado: "completado"
      },
      {
        id:"12673387",
        comentario:"Hay un cable caído",
        estado: "rechazado"
      },
      {
        id:"26627349",
        comentario:"Cayó un rayo en un poste",
        estado: "reportado"
      }
    ];
  }
}
