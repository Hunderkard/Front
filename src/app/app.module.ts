import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ti MIS COMPONENTES
import { CabeceraComponent } from './component/layout/cabecera/cabecera.component';
import { RegisterComponent } from './component/formularios/register/register.component';
import { LoginComponent } from './component/formularios/login/login.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { FormPlatoComponent } from './component/formularios/form-plato/form-plato.component';
import { FormProveedorComponent } from './component/formularios/form-proveedor/form-proveedor.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';

// ti FORMULARIO REACTIVE.
/* Thu-17/12 20:21:42 Decido usar los fromularios Reactive para no cargar de lógica el HTML. */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';

// ti ÉSTOS SE HAN PUESTOS SOLOS, ME DA MIEDO BORRARLOS.
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CabeceraComponent,
    FormIngredienteComponent,
    LoginComponent,
    PerfilComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FormPlatoComponent,
    FormProveedorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
