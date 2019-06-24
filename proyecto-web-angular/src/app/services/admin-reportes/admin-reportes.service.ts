import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminReportesService {

  constructor() { }

  getReportes() {
    return [
      {
        id: "34861957",
        usuario:"José Ramirez Cruz",
        delegacion:"Álvaro Obregón",
        colonia: "Florida",
        comentario: "Se cayó un poste de luz",
        estado: "Reportado"
      },
      {
        id: "26675657",
        usuario:"Rodrigo García Mayo",
        delegacion:"Benito Juárez",
        colonia: "Acacias",
        comentario: "Se cayó un poste de luz",
        estado: "Completado"
      }
    ];
  }
}
