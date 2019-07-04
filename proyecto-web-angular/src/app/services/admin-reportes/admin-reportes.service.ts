import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminReportesService {

  endpoint="http://localhost:3000/incidentesAdmin/";
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
  
  getReportes(delegacion:string, colonia:string, fecha:string): Observable<any> {
    return this.http.get(this.endpoint + delegacion + colonia + fecha).pipe(map(this.extractData));
  }
}
