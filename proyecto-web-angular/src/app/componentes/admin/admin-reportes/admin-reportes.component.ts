import { Component, OnInit } from '@angular/core';
import { AdminReportesService } from "../../../services/admin-reportes/admin-reportes.service";

@Component({
  selector: 'app-admin-reportes',
  templateUrl: './admin-reportes.component.html',
  styleUrls: ['./admin-reportes.component.scss'],
  providers: [AdminReportesService]
})
export class AdminReportesComponent implements OnInit {

  reportes;

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(AdminReportesService: AdminReportesService) { 
    this.reportes = AdminReportesService.getReportes();
    console.log(this.reportes);
  }

  ngOnInit() {
  }

}
