import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../clases/user-login';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public activeLang = 'es';

  model = new UserLogin("", "");

  submitted = false;

  onSubmit() {
    console.log("username: " + this.model.username);
    this.submitted = true;

    if(this.model.username == 'organizacion')
    {
      this.router.navigateByUrl('org-principal');
    }else{
      if(this.model.username == 'admin')
      {
        this.router.navigateByUrl('admin-principal');
      }else{
        console.log("Usuario invalido");
      }
    }
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private router:Router, private translate:TranslateService) {
    this.translate.setDefaultLang(this.activeLang); 
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
