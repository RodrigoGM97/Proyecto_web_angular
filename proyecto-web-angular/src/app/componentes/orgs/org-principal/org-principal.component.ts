import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { CrudIncidentesReportadosService } from "../../../services/incidentes-reportados/crud-incidentes-reportados.service"

@Component({
  selector: 'app-org-principal',
  templateUrl: './org-principal.component.html',
  styleUrls: ['./org-principal.component.scss'],
  providers: []
})
export class OrgPrincipalComponent implements OnInit {

  incidentes: any[] = [];

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(private crudIncidentesReportadosService:CrudIncidentesReportadosService) { 
  }

  ngOnInit() {
    this.crudIncidentesReportadosService.hola().subscribe((data : any[])=>{
      console.log(data);
      this.incidentes = data;
    })
  }

  
}
