/* Thu-07/01 17:42:22 Creando un módulo para los componentes de acceso público. */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// ti FORMULARIO REACTIVE.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ti MIS COMPONENTES
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../formularios/login/login.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule, // fu Éste es el módulo que permite usar el <router-outlet></router-outlet>
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
