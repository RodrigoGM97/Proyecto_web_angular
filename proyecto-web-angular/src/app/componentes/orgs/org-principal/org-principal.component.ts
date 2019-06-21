import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { IncidentesReportadosService } from "../../../services/incidentes-reportados.service";

@Component({
  selector: 'app-org-principal',
  templateUrl: './org-principal.component.html',
  styleUrls: ['./org-principal.component.scss'],
  providers: [IncidentesReportadosService]
})
export class OrgPrincipalComponent implements OnInit {

  incidentes;

  //@Output() clicked=new EventEmitter<string>(); 

  constructor(incidentesReportadosService: IncidentesReportadosService) { 
    this.incidentes = incidentesReportadosService.getIncidentes();
    console.log(this.incidentes);
  }

  ngOnInit() {
  }

}
