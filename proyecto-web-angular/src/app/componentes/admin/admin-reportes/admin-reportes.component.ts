import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-reportes',
  templateUrl: './admin-reportes.component.html',
  styleUrls: ['./admin-reportes.component.scss']
})
export class AdminReportesComponent implements OnInit {

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor() { }

  ngOnInit() {
  }

}
