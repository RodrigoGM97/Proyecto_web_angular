import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentesReportadosService {

  constructor() { }
  
  getIncidentes() {
    return [
      {
        id:"34861957",
        comentario:"Se cayó un poste de luz",
        estado: "reportado"
      },
      {
        id:"26675657",
        comentario:"Se cayó un poste de luz",
        estado: "completado"
      },
      {
        id:"12673387",
        comentario:"Se cayó un poste de luz",
        estado: "rechazado"
      },
      {
        id:"26627349",
        comentario:"Se cayó un poste de luz",
        estado: "reportado"
      }
    ];
  }
}
