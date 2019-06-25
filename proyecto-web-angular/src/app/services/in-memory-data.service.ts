import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let incidentes = [
      {
        id:"34861957",
        comentario:"Se cayó un poste de luz",
        estado: "reportado",
        calle: "Independencia",
        numero: 15,
        delegacion: "Álvaro Obregón",
        colonia: "Del Mar",
        fecha: "2019-06-13",
        ine: "foto1.jpg"
      },
      {
        id:"26675657",
        comentario:"Se quemó un transformador",
        estado: "completado",
        calle: "Insurgentes Sur",
        numero: 1244,
        delegacion: "Benito Juárez",
        colonia: "Del Valle",
        fecha: "2019-02-19",
        ine: "foto2.jpg"
      },
      {
        id:"12673387",
        comentario:"Hay un cable caído",
        estado: "rechazado",
        calle: "Concepción Beistegui",
        numero: 12,
        delegacion: "Benito Juárez",
        colonia: "Narvarte",
        fecha: "2018-11-11",
        ine: "foto3.jpg"
      },
      {
        id:"26627349",
        comentario:"Cayó un rayo en un poste",
        estado: "reportado",
        calle: "Arteaga y Salazar",
        numero: 120,
        delegacion: "Cuajimalpa",
        colonia: "Contadero",
        fecha: "2019-05-23",
        ine: "foto4.jpg"
      }
    ];

    return {incidentes};
  }
}
