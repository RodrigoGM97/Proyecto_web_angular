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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPrincipalComponent,
    AdminReportesComponent,
    OrgPrincipalComponent,
    ClienteGenReporteComponent,
    ClientePrincipalComponent,
    ClienteReportesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
