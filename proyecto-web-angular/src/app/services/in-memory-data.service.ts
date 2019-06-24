import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let incidentes = [
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

    return {incidentes};
  }
}
