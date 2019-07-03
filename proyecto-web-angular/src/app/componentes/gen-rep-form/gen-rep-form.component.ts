import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../clases/reporte';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gen-rep-form',
  templateUrl: './gen-rep-form.component.html',
  styleUrls: ['./gen-rep-form.component.scss']
})
export class GenRepFormComponent implements OnInit {  
  form = new FormGroup({
    calle: new FormControl('calle'),
    fecha: new FormControl('fecha'),
    curp: new FormControl('curp'),
    numero: new FormControl('numero'),
    delegacion: new FormControl('delegacion'),
    colonia: new FormControl('colonia'),
    comentario: new FormControl('comentario')
  });

  reporte:Reporte;
  delegaciones = ["Alvaro Obregón", "Cuajimalpa"];
  colonias = ["Colonia A", "Colonia B"]
  public activeLang = 'es';
  
  
  constructor(private toastrService:ToastrService, private translate:TranslateService) {
    this.reporte = new Reporte();
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
  }
  
  btnClick() {
    
    var fecha_str:string = <string> this.reporte.fecha;
    var curp_str:string = <string> this.reporte.curp;
    var calle_str:string = <string> this.reporte.calle;
    var numero_str:string = <string> <any> this.reporte.numero;
    var delegacion_str:string = <string> this.reporte.delegacion;
    var colonia_str:string = <string> this.reporte.colonia;
    var comentario_str:string = <string> this.reporte.comentario;
    
    try {
      this.form.setValue({
        calle: calle_str,
        fecha: fecha_str,
        curp: curp_str,
        numero: numero_str,
        delegacion: delegacion_str,
        colonia: colonia_str,
        comentario: comentario_str});
    } catch (e) {
      this.toastrService.error("Aun necesitas llenar ciertos campos");
      return;
    }
    if (fecha_str.length != 0 && curp_str.length != 0 && calle_str.length != 0 && numero_str.length != 0 && delegacion_str.length != 0 && colonia_str.length != 0 && comentario_str.length != 0)
      this.toastrService.success("¡Reporte Generado!", "Estado de reporte:");
    
    else
      this.toastrService.error("Aun necesitas llenar ciertos campos");
  }

  public  cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
