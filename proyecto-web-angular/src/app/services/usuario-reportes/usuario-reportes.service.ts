import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class UsuarioReportesService {

  constructor() { }

  getReportes() {
    return [
      {
        id: "34861957",
        delegacion:"Álvaro Obregón",
        colonia: "Florida",
        tipo: "Luz",
        comentario: "Se cayó un poste de luz",
        estado: "Reportado"
      },
      {
        id: "26675657",
        delegacion:"Benito Juárez",
        colonia: "Acacias",
        tipo: "Luz",
        comentario: "Se cayó un poste de luz",
        estado: "Completado"
      }
    ];
  }
}
