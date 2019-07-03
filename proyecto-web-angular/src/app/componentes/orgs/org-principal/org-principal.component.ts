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

  ngOnInit() {
    this.crudIncidentesReportadosService.getIncidentes().subscribe((data : any[])=>{
      console.log(data);
      this.incidentes = data;
    })
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
  
}
