import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  endpoint = 'http://localhost:3000/incidentes';
	 httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json',
       
 	 })
	};

  constructor(public http:HttpClient) { 
    
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

  addReporte (reporte): Observable<any> {
    console.log(reporte);
    return this.http.post<any>(this.endpoint, JSON.stringify(reporte), this.httpOptions).pipe(
      tap((reporte) => console.log(`added reporte w/ id=${reporte.id}`)),
      catchError(this.handleError<any>('addReporte'))
    );
  }
}
