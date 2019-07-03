import { Component, OnInit } from '@angular/core';
import { AdminEmpleadosService } from "../../../services/admin-empleados/admin-empleados.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.scss'],
  providers: [AdminEmpleadosService]
})
export class AdminPrincipalComponent implements OnInit {

  empleados;

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }
  
  constructor (public adminEmpleadosService:AdminEmpleadosService, private route:ActivatedRoute){

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

}
