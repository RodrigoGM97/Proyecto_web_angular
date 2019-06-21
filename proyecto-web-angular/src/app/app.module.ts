import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminPrincipalComponent } from './componentes/admin/admin-principal/admin-principal.component';
import { AdminReportesComponent } from './componentes/admin/admin-reportes/admin-reportes.component';
import { OrgPrincipalComponent } from './componentes/orgs/org-principal/org-principal.component';
import { ClienteGenReporteComponent } from './componentes/usuario/cliente-gen-reporte/cliente-gen-reporte.component';
import { ClientePrincipalComponent } from './componentes/usuario/cliente-principal/cliente-principal.component';
import { ClienteReportesComponent } from './componentes/usuario/cliente-reportes/cliente-reportes.component';

//Importing Router Module
import { Routes, RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './componentes/principal/principal.component';



const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
      path: 'admin-principal',
      component: AdminPrincipalComponent
  },
  {
    path: 'admin-reportes',
    component: AdminReportesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'org-principal',
    component: OrgPrincipalComponent
  },
  {
    path: 'cliente-gen-reporte',
    component: ClienteGenReporteComponent
  },
  {
    path: 'cliente-principal',
    component: ClientePrincipalComponent
  },
  {
    path: 'cliente-reportes',
    component: ClienteReportesComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPrincipalComponent,
    AdminReportesComponent,
    OrgPrincipalComponent,
    ClienteGenReporteComponent,
    ClientePrincipalComponent,
    ClienteReportesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
