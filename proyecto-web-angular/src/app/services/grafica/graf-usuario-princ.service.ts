import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrafUsuarioPrincService {

  endpoint="http://localhost:3000/incidentesOrgByTipo/";
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

  getGrafData(tipo_reporte:string): Observable<any> {
    return this.http.get(this.endpoint + tipo_reporte).pipe(map(this.extractData));
  }
}
