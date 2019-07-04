import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { IncidentesReportadosService } from "../../../services/incidentes-reportados/incidentes-reportados.service"
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-org-principal',
  templateUrl: './org-principal.component.html',
  styleUrls: ['./org-principal.component.scss'],
  providers: [IncidentesReportadosService]
})
export class OrgPrincipalComponent implements OnInit {

  incidentes;
  public activeLang = 'es';

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  tipo_reporte: string;
  delegacion: string;
  colonia: string;

  options2 = [
    { name: "Álvaro Obregón", value: 1 },
    { name: "Benito Juárez", value: 2 },
    { name: "Cuajimalpa", value: 3 }
  ]
  options3 = [
    { name: "Lomas de Chapultepec", value: 1 },
    { name: "Lomas de Reforma", value: 2 },
    { name: "Florida", value: 3 },
    { name: "Santa Fe", value: 4}
  ]

  print() {
    console.log("My input: ", this.delegacion);
    console.log("My input: ", this.colonia);
  }

  constructor(public incidentesReportadosService:IncidentesReportadosService, private route:ActivatedRoute, private translate:TranslateService) {
    this.translate.setDefaultLang(this.activeLang); 
  }

  ngOnInit() {
  }

  getIncidentes(tipo_reporte:string, delegacion:string, colonia:string)
  {
    console.log("My input: ", this.delegacion);
    console.log("My input: ", this.colonia);

    this.incidentes = [];
    this.incidentesReportadosService.getIncidentes(tipo_reporte, delegacion, colonia).subscribe((data: {}) => {
      console.log(data);
      this.incidentes = data;
    });
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
  
}
