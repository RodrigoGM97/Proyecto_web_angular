import { Component, OnInit, Input } from '@angular/core';
import { IncidentesReportadosService } from "../../../../services/incidentes-reportados/incidentes-reportados.service";
import { Reporte } from "../../../../clases/reporte"

@Component({
  selector: '[app-incidente-row]', //con corchetes se indica que es un componente anidado
  templateUrl: './incidente-row.component.html',
  styleUrls: ['./incidente-row.component.scss']
})
export class IncidenteRowComponent implements OnInit {

  @Input() incidente;

  constructor(private IncidentesReportadosService:IncidentesReportadosService) { }

  ngOnInit() {
  }

  incidenteCompletado(id:number) {
    var incidenteActualizado = {
      id:this.incidente.id,
      comentario:this.incidente.comentario,
      estado:"completado",
      calle: this.incidente.calle,
      numero: this.incidente.numero,
      delegacion: this.incidente.delegacion,
      colonia: this.incidente.colonia,
      fecha: this.incidente.fecha,
      curp: this.incidente.curp,
      tipo_reporte: this.incidente.tipo_reporte
    }

    /*Reporte incidenteActualizado(
      this.incidente.id, 
      this.incidente.comentario, 
      "completado",
      this.incidente.calle,
      this.incidente.numero,
      this.incidente.delegacion,
      this.incidente.colonia,
      this.incidente.fecha,
      this.incidente.ine);*/

    this.IncidentesReportadosService.updateIncidente(this.incidente.id, incidenteActualizado).subscribe();
    this.incidente.estado = "completado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como completado");
    console.log("Incidente: " + this.incidente.id + " " + this.incidente.comentario + " " + this.incidente.estado);
  }

  incidenteRechazado(id:number) {
    var incidenteActualizado = {
      id:this.incidente.id,
      comentario:this.incidente.comentario,
      estado:"rechazado",
      calle: this.incidente.calle,
      numero: this.incidente.numero,
      delegacion: this.incidente.delegacion,
      colonia: this.incidente.colonia,
      fecha: this.incidente.fecha,
      curp: this.incidente.curp,
      tipo_reporte: this.incidente.tipo_reporte
    }

    this.IncidentesReportadosService.updateIncidente(this.incidente.id, incidenteActualizado).subscribe();
    this.incidente.estado = "rechazado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como rechazado");
  }

}
