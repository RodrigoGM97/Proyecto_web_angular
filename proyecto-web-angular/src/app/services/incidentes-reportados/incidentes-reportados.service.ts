import { Injectable } from '@angular/core';
import { CrudIncidentesReportadosService} from './crud-incidentes-reportados.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncidentesReportadosService{

  endpoint="http://localhost:3000/incidentesOrgWithFilters/"

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
}
