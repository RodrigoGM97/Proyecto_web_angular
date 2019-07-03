import { Component, OnInit } from '@angular/core';
import { AdminEmpleadosService } from "../../../services/admin-empleados/admin-empleados.service";
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.scss'],
  providers: [AdminEmpleadosService]
})
export class AdminPrincipalComponent implements OnInit {

  empleados;
  public activeLang = 'es';

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }
  
  constructor (public adminEmpleadosService:AdminEmpleadosService, private route:ActivatedRoute, private translate:TranslateService){
    this.translate.setDefaultLang(this.activeLang);
  }

  /*constructor(AdminEmpleadosService: AdminEmpleadosService) { 
    this.empleados = AdminEmpleadosService.getEmpleado();
    console.log(this.empleados);
}*/

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados()
  {
    this.empleados = [];
    this.adminEmpleadosService.getEmpleado().subscribe((data: {}) => {
      console.log(data);
      this.empleados = data;
    });
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
