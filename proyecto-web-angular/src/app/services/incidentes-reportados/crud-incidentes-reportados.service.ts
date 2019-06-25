import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudIncidentesReportadosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getIncidentes(){ 
    this.httpClient.get(this.SERVER_URL + 'incidentes').subscribe((data : any[])=>{
      console.log(data);
    })

    return this.httpClient.get(this.SERVER_URL + 'incidentes');
  }

  public getIncidente(IncidenteId){
       return this.httpClient.get(`${this.SERVER_URL + 'incidentes'}/${IncidenteId}`); 
  }

  public createIncidente(Incidente: {id: number, comentario: string, estado: string, calle:string, numero:number, delegacion:string, colonia:string, fecha:string, ine:string}){
      return this.httpClient.post(`${this.SERVER_URL + 'incidentes'}`, Incidente)
  }

  public deleteIncidente(IncidenteId){
      return this.httpClient.delete(`${this.SERVER_URL + 'incidentes'}/${IncidenteId}`)
  }
  public updateIncidente(Incidente: {id: number, comentario: string, estado: string, calle:string, numero:number, delegacion:string, colonia:string, fecha:string, ine:string}){
    
    this.httpClient.post(`${this.SERVER_URL + 'incidentes'}/${Incidente.id}`, Incidente, this.httpOptions);

    console.log("nuevo estado: " + Incidente.estado);
    
    return;
  }
}
