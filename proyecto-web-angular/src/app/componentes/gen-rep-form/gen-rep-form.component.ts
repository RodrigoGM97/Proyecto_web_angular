import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../clases/reporte';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ReporteService } from "../../services/gen-reporte/reporte.service";

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
  colonias = ["Del Valle", "Santa Fe"]
  public activeLang = 'es';
  
  
  constructor(private toastrService:ToastrService, private translate:TranslateService, private router: Router, public reporteService:ReporteService) {
    this.reporte = new Reporte();
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
  }

  get aJson() { return JSON.stringify(this.reporte); }
  
  btnClick() {
    
    var fecha_str:string = <string> this.reporte.fecha;
    var curp_str:string = <string> this.reporte.curp;
    var calle_str:string = <string> this.reporte.calle;
    var numero_str:string = <string> <any> this.reporte.numero;
    var delegacion_str:string = <string> this.reporte.delegacion;
    var colonia_str:string = <string> this.reporte.colonia;
    var comentario_str:string = <string> this.reporte.comentario;
    this.reporte.estado = "reportado";
    this.reporte.id = Math.floor(Math.random() * 1000) + 1;
    this.reporte.tipo_reporte = "luz";
    
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
    {
      this.toastrService.success("¡Reporte Generado!", "Estado de reporte:");
      this.reporteService.addReporte(this.reporte).subscribe();
    }
    
    else
      this.toastrService.error("Aun necesitas llenar ciertos campos");
  }

  public  cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
