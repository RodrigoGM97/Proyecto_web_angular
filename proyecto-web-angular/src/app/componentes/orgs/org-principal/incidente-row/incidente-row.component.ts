import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-incidente-row]', //con corchetes se indica que es un componente anidado
  templateUrl: './incidente-row.component.html',
  styleUrls: ['./incidente-row.component.scss']
})
export class IncidenteRowComponent implements OnInit {

  @Input() incidente;

  constructor() { }

  ngOnInit() {
  }

  incidenteCompletado() {
    this.incidente.estado = "completado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como completado");
  }

  incidenteRechazado() {
    this.incidente.estado = "rechazado";
    console.log("Se marco incidente '" + this.incidente.comentario + "' como rechazado");
  }

}
