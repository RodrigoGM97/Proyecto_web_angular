import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../clases/reporte';

@Component({
  selector: 'app-gen-rep-form',
  templateUrl: './gen-rep-form.component.html',
  styleUrls: ['./gen-rep-form.component.scss']
})
export class GenRepFormComponent implements OnInit {
  reporte:Reporte;

  
  constructor() {
    this.reporte = new Reporte();
   }

  ngOnInit() {
  }

}
