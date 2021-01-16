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

// ti FORMULARIO REACTIVE.
/* Thu-17/12 20:21:42 Decido usar los fromularios Reactive para no cargar de lógica el HTML. */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';

// ti ÉSTOS SE HAN PUESTOS SOLOS, ME DA MIEDO BORRARLOS.
import { environment } from '../environments/environment';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';


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
