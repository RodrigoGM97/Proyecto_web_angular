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

}
