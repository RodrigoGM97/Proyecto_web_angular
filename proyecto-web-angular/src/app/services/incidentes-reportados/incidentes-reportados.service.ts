import { Injectable } from '@angular/core';
import { CrudIncidentesReportadosService} from './crud-incidentes-reportados.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncidentesReportadosService{

  endpoint="http://localhost:3000/incidentesOrgWithFilters/"
  endpoint2="http://localhost:3000/incidentes/"
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
     
    })
  };

  constructor(public http:HttpClient) { }

  ngOnInit() {  }
  
  private extractData(res:Response) {
    let body = res;
    return body || {};
  }

  getIncidentes(tipo_reporte:string, delegacion:string, colonia:string): Observable<any> {

    var encodedURI = encodeURI(tipo_reporte + "&" + delegacion + "&" + colonia);
    console.log(encodedURI);

    return this.http.get(this.endpoint + encodedURI).pipe(map(this.extractData));
  }

  updateIncidente (id, incidenteActualizado): Observable<any> {
    /*return this.http.put(this.endpoint2 + id, JSON.stringify(incidenteActualizado), this.httpOptions).pipe(
      tap(_ => console.log(`updated incidente id=${id}`)),
      catchError(this.handleError<any>('updateIncidente'))
    );*/
        
    return this.http.put(this.endpoint2 + id, JSON.stringify(incidenteActualizado), this.httpOptions).pipe(
      catchError(this.handleError('updateIncidente', incidenteActualizado))
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
