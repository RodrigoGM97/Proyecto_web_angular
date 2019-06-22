import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-reportes',
  templateUrl: './cliente-reportes.component.html',
  styleUrls: ['./cliente-reportes.component.scss']
})
export class ClienteReportesComponent implements OnInit {

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor() { }

  ngOnInit() {
  }

}
