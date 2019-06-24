import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminPrincipalComponent } from './componentes/admin/admin-principal/admin-principal.component';
import { AdminReportesComponent } from './componentes/admin/admin-reportes/admin-reportes.component';
import { OrgPrincipalComponent } from './componentes/orgs/org-principal/org-principal.component';
import { ClienteGenReporteComponent } from './componentes/usuario/cliente-gen-reporte/cliente-gen-reporte.component';
import { ClientePrincipalComponent } from './componentes/usuario/cliente-principal/cliente-principal.component';
import { ClienteReportesComponent } from './componentes/usuario/cliente-reportes/cliente-reportes.component';
import { ToastrModule } from 'ngx-toastr';

//Importing Router Module
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IncidenteRowComponent } from './componentes/orgs/org-principal/incidente-row/incidente-row.component';
import { GenRepFormComponent } from './componentes/gen-rep-form/gen-rep-form.component';
import { LoginFormComponent } from './componentes/login-form/login-form.component'; 
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EmpleadosRowComponent } from './componentes/admin/admin-principal/empleados-row/empleados-row.component';
import { ReportesRowComponent } from './componentes/admin/admin-reportes/reportes-row/reportes-row.component';
import { ReportesRowUserComponent } from './componentes/usuario/cliente-reportes/reportes-row-user/reportes-row-user.component'


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
    PrincipalComponent,
    IncidenteRowComponent,
    GenRepFormComponent,
    LoginFormComponent,
    CarouselComponent,
    EmpleadosRowComponent,
    ReportesRowComponent,
    ReportesRowUserComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    BsDropdownModule.forRoot()
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
