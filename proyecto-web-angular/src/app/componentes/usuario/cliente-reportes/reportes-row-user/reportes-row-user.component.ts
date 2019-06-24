import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-reportes-row-user]',
  templateUrl: './reportes-row-user.component.html',
  styleUrls: ['./reportes-row-user.component.scss']
})
export class ReportesRowUserComponent implements OnInit {

  @Input() incidente;

  constructor() { }

  ngOnInit() {
  }

}
