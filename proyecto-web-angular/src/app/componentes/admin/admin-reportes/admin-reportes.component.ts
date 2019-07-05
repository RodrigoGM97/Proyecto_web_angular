import { Component, OnInit } from '@angular/core';
import { AdminReportesService } from "../../../services/admin-reportes/admin-reportes.service";
import { ActivatedRoute } from '@angular/router';
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

  fecha: string;
  delegacion: string;
  colonia: string;

  options = [
    { name: "11/06/2019", value: 1 },
    { name: "12/06/2019", value: 2 },
    { name: "13/06/2019", value: 3 }
  ]
  options2 = [
    { name: "Álvaro Obregón", value: 1 },
    { name: "Benito Juárez", value: 2 },
    { name: "Cuajimalpa", value: 3 }
  ]
  options3 = [
    { name: "Del Valle", value: 1 },
    { name: "Santa Fe", value: 2 },
    { name: "Florida", value: 3 },
    { name: "Contadero", value:4 }
  ]

  delegaciones = ["Álvaro Obregón", "Cuajimalpa", "Benito Juárez"];
  colonias = ["Del Valle", "Santa Fe", "Contadero", "Florida"]

  print() {
    console.log("My input: ", this.fecha);
    console.log("My input: ", this.delegacion);
    console.log("My input: ", this.colonia);
    this.fecha.split('/').join('%2F');
    this.delegacion+="&";
    this.colonia+="&";
    this.getReportes(this.delegacion, this.colonia, this.fecha.split('/').join('%2F'));
  }

  constructor(public AdminReportesService: AdminReportesService, private route:ActivatedRoute, private translate:TranslateService) { 
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  getReportes(delegacion:string, colonia:string, fecha:string)
  {
    this.reportes = [];
    this.AdminReportesService.getReportes(delegacion, colonia, fecha).subscribe((data: {}) => {
      console.log(data);
      this.reportes = data;
    });
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }

  deleteReporte($event) {
    console.log("id a ser eliminado: " + $event);
    this.AdminReportesService.deleteReporte($event).subscribe(
      res => 
      {
        //this.getReportes("Beni");
      },
      (err) =>
      {
        console.log(err);
      }
    );
  }

}
