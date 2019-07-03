import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

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
