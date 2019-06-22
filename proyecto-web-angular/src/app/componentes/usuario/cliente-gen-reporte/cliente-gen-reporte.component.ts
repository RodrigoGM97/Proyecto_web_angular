import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-gen-reporte',
  templateUrl: './cliente-gen-reporte.component.html',
  styleUrls: ['./cliente-gen-reporte.component.scss']
})
export class ClienteGenReporteComponent implements OnInit {

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor() { }

  ngOnInit() {
  }

}
