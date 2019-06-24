import { Component, OnInit } from '@angular/core';
import { UsuarioReportesService } from "../../../services/usuario-reportes/usuario-reportes.service";

@Component({
  selector: 'app-cliente-reportes',
  templateUrl: './cliente-reportes.component.html',
  styleUrls: ['./cliente-reportes.component.scss'],
  providers: [UsuarioReportesService]
})
export class ClienteReportesComponent implements OnInit {

  incidentes;

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(UsuarioReportesService: UsuarioReportesService) { 
    this.incidentes = UsuarioReportesService.getReportes();
    console.log(this.incidentes);
  }

  ngOnInit() {
  }

}
