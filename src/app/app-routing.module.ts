import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ti COMPONENTES

import { LoginComponent } from './component/formularios/login/login.component';
import { RegisterComponent } from './component/formularios/register/register.component';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';

// ha PARA SEPARAR LOS COMPOENTES PUBLICOS DE LOS PRIVADOS
import { PublicComponent } from './component/public/public.component';
import { SecureComponent } from './component/secure/secure.component';
import { HomeComponent } from './component/public/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:PublicComponent,
    children:[
      {path:"", component:HomeComponent},
      {path:"login", component:LoginComponent},
    ]
  
  },
  {path:"secure", component:SecureComponent},
  {path:"register", component:RegisterComponent},
  {path:"ingrediente/create", component:FormIngredienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
