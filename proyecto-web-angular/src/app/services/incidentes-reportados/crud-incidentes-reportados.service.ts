import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudIncidentesReportadosService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public hola(){ 
       return this.httpClient.get(this.SERVER_URL + 'incidentes');
  }

  public getIncidente(IncidenteId){
       return this.httpClient.get(`${this.SERVER_URL + 'incidentes'}/${IncidenteId}`); 
  }
  public createIncidente(Incidente: {id: number, comentario: string, estado: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'incidentes'}`, Incidente)
  }

  public deleteIncidente(IncidenteId){
      return this.httpClient.delete(`${this.SERVER_URL + 'incidentes'}/${IncidenteId}`)
  }
  public updateIncidente(Incidente: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'incidentes'}/${Incidente.id}`, Incidente)
  }
}
