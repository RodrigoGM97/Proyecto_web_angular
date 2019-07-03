import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminEmpleadosService {

  endpoint="http://localhost:3000/empleados";
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
  
  getEmpleado(): Observable<any> {
    return this.http.get(this.endpoint).pipe(map(this.extractData));
  }
}
