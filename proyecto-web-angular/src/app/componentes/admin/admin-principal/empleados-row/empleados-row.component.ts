import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-empleados-row]',
  templateUrl: './empleados-row.component.html',
  styleUrls: ['./empleados-row.component.scss']
})
export class EmpleadosRowComponent implements OnInit {

  @Input() empleado;

  constructor() { }

  ngOnInit() {
  }

}
