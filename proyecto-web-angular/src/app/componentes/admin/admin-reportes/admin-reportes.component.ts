import { Component, OnInit } from '@angular/core';
import { AdminReportesService } from "../../../services/admin-reportes/admin-reportes.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-reportes',
  templateUrl: './admin-reportes.component.html',
  styleUrls: ['./admin-reportes.component.scss'],
  providers: [AdminReportesService]
})
export class AdminReportesComponent implements OnInit {

  reportes;
  public activeLang = 'es';

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(AdminReportesService: AdminReportesService, private translate:TranslateService) { 
    this.reportes = AdminReportesService.getReportes();
    console.log(this.reportes);
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
