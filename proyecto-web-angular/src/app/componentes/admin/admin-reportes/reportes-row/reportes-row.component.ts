import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-reportes-row]',
  templateUrl: './reportes-row.component.html',
  styleUrls: ['./reportes-row.component.scss']
})
export class ReportesRowComponent implements OnInit {

  @Input() reporte;

  constructor() { }

  ngOnInit() {
  }

}
