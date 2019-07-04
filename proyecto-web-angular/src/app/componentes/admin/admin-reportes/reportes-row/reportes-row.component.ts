import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: '[app-reportes-row]',
  templateUrl: './reportes-row.component.html',
  styleUrls: ['./reportes-row.component.scss']
})
export class ReportesRowComponent implements OnInit {

  @Output() deleteMsg = new EventEmitter<string>();
  @Input() reporte;

  constructor() { }

  ngOnInit() {
  }

  //La variable "id" tiene signo "$" porque es una variable obtenida del HTML
  delete($id) {
    //emite un evento al componente padre con el id del elemento a eliminar
    this.deleteMsg.emit($id);
    console.log("Se emitió la señal de eliminar el id " + $id);
  }

}
