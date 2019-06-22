import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../clases/reporte';
import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';

@Component({
  selector: 'app-gen-rep-form',
  templateUrl: './gen-rep-form.component.html',
  styleUrls: ['./gen-rep-form.component.scss']
})
export class GenRepFormComponent implements OnInit {  
  form = new FormGroup({
    calle: new FormControl('calle'),
    fecha: new FormControl('fecha'),
    ine: new FormControl('ine'),
    numero: new FormControl('numero'),
    delegacion: new FormControl('delegacion'),
    colonia: new FormControl('colonia'),
    comentario: new FormControl('comentario')
  });

  reporte:Reporte;
  delegaciones = ["Alvaro Obregón", "Cuajimalpa"];
  colonias = ["Colonia A", "Colonia B"]
  
  
  
  constructor(private toastrService:ToastrService) {
    this.reporte = new Reporte();
    this.reporte.ine = "Escoge Archivo";
   }

  ngOnInit() {
  }
  
  btnClick() {
    console.log("Hola");
    
    var fecha_str:string = <string> this.reporte.fecha;
    var ine_str:string = <string> this.reporte.ine;
    var calle_str:string = <string> this.reporte.calle;
    var numero_str:string = <string> <any> this.reporte.numero;
    var delegacion_str:string = <string> this.reporte.delegacion;
    var colonia_str:string = <string> this.reporte.colonia;
    var comentario_str:string = <string> this.reporte.comentario;
    
    try {
      this.form.setValue({
        calle: calle_str,
        fecha: fecha_str,
        ine: ine_str,
        numero: numero_str,
        delegacion: delegacion_str,
        colonia: colonia_str,
        comentario: comentario_str});
    } catch (e) {
      this.toastrService.error("Aun necesitas llenar ciertos campos");
      return;
    }
    
    this.toastrService.success("¡Reporte Generado!", "Estado de reporte:");
  }


}
