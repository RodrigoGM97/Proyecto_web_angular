import { Component, OnInit } from '@angular/core';
import { UsuarioReportesService } from "../../../services/usuario-reportes/usuario-reportes.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cliente-reportes',
  templateUrl: './cliente-reportes.component.html',
  styleUrls: ['./cliente-reportes.component.scss'],
  providers: [UsuarioReportesService]
})
export class ClienteReportesComponent implements OnInit {

  incidentes;
  public activeLang = 'es';

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  selectedOption: string;
  selectedOption2: string;
  selectedOption3: string;

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
    { name: "Lomas de Chapultepec", value: 1 },
    { name: "Lomas de Reforma", value: 2 },
    { name: "Florida", value: 3 }
  ]

  print() {
    console.log("My input: ", this.selectedOption);
    console.log("My input: ", this.selectedOption2);
    console.log("My input: ", this.selectedOption3);
  }

  constructor(UsuarioReportesService: UsuarioReportesService, private translate:TranslateService) { 
    this.incidentes = UsuarioReportesService.getReportes();
    console.log(this.incidentes);
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
