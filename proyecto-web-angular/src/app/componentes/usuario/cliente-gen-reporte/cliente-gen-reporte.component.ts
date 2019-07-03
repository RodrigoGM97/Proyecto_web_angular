import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cliente-gen-reporte',
  templateUrl: './cliente-gen-reporte.component.html',
  styleUrls: ['./cliente-gen-reporte.component.scss']
})
export class ClienteGenReporteComponent implements OnInit {

  public activeLang = 'es';
  
  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor(private translate:TranslateService) { 
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  public  cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
