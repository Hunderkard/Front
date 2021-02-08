import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/init/app.component';

// ti MIS COMPONENTES
import { CabeceraComponent } from './component/layout/cabecera/cabecera.component';
import { FooterComponent } from './component/layout/footer/footer.component';

import { RegisterComponent } from './component/formularios/register/register.component';
import { LoginComponent } from './component/formularios/login/login.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RequestResetComponent } from './component/formularios/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/formularios/password/response-reset/response-reset.component';

// ti FORMULARIO REACTIVE.
/* Thu-17/12 20:21:42 Decido usar los fromularios Reactive para no cargar de lógica el HTML. */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';
import { FormProveedorComponent } from './component/formularios/form-proveedor/form-proveedor.component';
import { FormPlatoComponent } from './component/formularios/form-plato/form-plato.component';

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
    FooterComponent,
    
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
