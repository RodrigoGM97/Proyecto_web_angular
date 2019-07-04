import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { CrudIncidentesReportadosService } from "../../../services/incidentes-reportados/crud-incidentes-reportados.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-org-principal',
  templateUrl: './org-principal.component.html',
  styleUrls: ['./org-principal.component.scss'],
  providers: []
})
export class OrgPrincipalComponent implements OnInit {

  incidentes: any[] = [];
  public activeLang = 'es';

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(private crudIncidentesReportadosService:CrudIncidentesReportadosService, private translate:TranslateService) {
    this.translate.setDefaultLang(this.activeLang); 
  }

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
    { name: "Florida", value: 3 }
  ]

  print() {
    console.log("My input: ", this.delegacion);
    console.log("My input: ", this.colonia);
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
  
}
