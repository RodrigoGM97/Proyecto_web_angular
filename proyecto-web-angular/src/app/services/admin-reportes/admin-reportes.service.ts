import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminReportesService {

  endpoint="http://localhost:3000/incidentesAdmin/";
  endpoint2="http://localhost:3000/incidentes/";
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

  deleteReporte(id) : Observable<any> {
    return this.http.delete<any>(this.endpoint2 + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted reporte id=${id}`)),
      catchError(this.handleError<any>('deleteReporte'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
