import { Component, OnInit, Input } from '@angular/core';
import { CrudIncidentesReportadosService } from "../../../../services/incidentes-reportados/crud-incidentes-reportados.service";


@Component({
  selector: '[app-incidente-row]', //con corchetes se indica que es un componente anidado
  templateUrl: './incidente-row.component.html',
  styleUrls: ['./incidente-row.component.scss']
})
export class IncidenteRowComponent implements OnInit {

  @Input() incidente;

  constructor(private crudIncidentesReportadosService:CrudIncidentesReportadosService) { }

  ngOnInit() {
  }

  incidenteCompletado() {
    var incidenteActualizado = {
      id:this.incidente.id,
      comentario:this.incidente.comentario,
      estado:"completado"
    }

    this.crudIncidentesReportadosService.updateIncidente(incidenteActualizado);
    this.incidente.estado = "completado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como completado");
    console.log("Incidente: " + this.incidente.id + " " + this.incidente.comentario + " " + this.incidente.estado);
  }

  incidenteRechazado() {
    this.incidente.estado = "rechazado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como rechazado");
  }

}
