import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../clases/reporte';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gen-rep-form',
  templateUrl: './gen-rep-form.component.html',
  styleUrls: ['./gen-rep-form.component.scss']
})
export class GenRepFormComponent implements OnInit {
  reporte:Reporte;
  delegaciones = ["Alvaro Obregón", "Cuajimalpa"];
  colonias = ["Colonia A", "Colonia B"]
  
  
  
  constructor(private toastrService:ToastrService) {
    this.reporte = new Reporte();
   }

  ngOnInit() {
  }

  btnClick() {
    this.toastrService.success("¡Reporte Generado!", "Estado de reporte:");
  }


}
