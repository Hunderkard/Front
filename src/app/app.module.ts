import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ti MIS COMPONENTES
import { RegisterComponent } from './component/formularios/register/register.component';
import { CabeceraComponent } from './component/layout/cabecera/cabecera.component';
import { LoginComponent } from './component/formularios/login/login.component';

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
