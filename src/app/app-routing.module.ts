import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ti COMPONENTES
import { LoginComponent } from './component/formularios/login/login.component';
import { RegisterComponent } from './component/formularios/register/register.component';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';
import { PerfilComponent } from './component/perfil/perfil.component';

//ti SERVICIO
import { PrelogService } from './service/CanActive/prelog.service';
import { PostlogService } from './service/CanActive/postlog.service';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';

// ha PARA SEPARAR LOS COMPOENTES PUBLICOS DE LOS PRIVADOS
const routes: Routes = [
  {path:"", canActivate:[PrelogService], children:[
    { path:"login", component:LoginComponent},
    { path:"register", component:RegisterComponent},
    { path:"req-password-reset", component: RequestResetComponent},
    { path:"res-password-reset", component: ResponseResetComponent},
  ]},

  {path:"", canActivate:[PostlogService], children:[
    { path:"perfil", component:PerfilComponent},
    { path:"ingrediente/create", component:FormIngredienteComponent}  

  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
