import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioReportesService {

  endpoint="http://localhost:3000/incidentesUser/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  constructor(public http:HttpClient) { 
    
  }

  private extractData(res:Response) {
    let body = res;
    return body || {};
  }
  
  getReporte(delegacion:string, colonia:string, fecha:string, curp:string ): Observable<any> {
    return this.http.get(this.endpoint + delegacion + colonia + fecha + curp).pipe(map(this.extractData));
  }
}
