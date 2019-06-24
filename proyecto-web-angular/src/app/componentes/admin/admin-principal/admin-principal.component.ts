import { Component, OnInit } from '@angular/core';
import { AdminEmpleadosService } from "../../../services/admin-empleados/admin-empleados.service";

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
  
  constructor(AdminEmpleadosService: AdminEmpleadosService) { 
    this.empleados = AdminEmpleadosService.getEmpleado();
    console.log(this.empleados);
  }

  ngOnInit() {
  }

}
