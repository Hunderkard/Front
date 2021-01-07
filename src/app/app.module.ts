import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ti MIS COMPONENTES
import { RegisterComponent } from './component/formularios/register/register.component';
import { CabeceraComponent } from './component/layout/cabecera/cabecera.component';

// ti FORMULARIO REACTIVE.
/* Thu-17/12 20:21:42 Decido usar los fromularios Reactive para no cargar de lógica el HTML. */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';

// ti ÉSTOS SE HAN PUESTOS SOLOS, ME DA MIEDO BORRARLOS.
import { environment } from '../environments/environment';
import { SecureComponent } from './component/secure/secure.component';

// ti MIS MÓDULOS.
import { PublicModule } from './component/public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CabeceraComponent,
    FormIngredienteComponent,
    SecureComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
