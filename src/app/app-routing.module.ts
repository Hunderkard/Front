import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ti COMPONENTES- Para direccionar la ruta.
import { LoginComponent } from './component/formularios/login/login.component';
import { RegisterComponent } from './component/formularios/register/register.component';
import { FormIngredienteComponent } from './component/formularios/form-ingrediente/form-ingrediente.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RequestResetComponent } from './component/formularios/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/formularios/password/response-reset/response-reset.component';

//ti SERVICIOS- Para comprobar los permisos.
import { PrelogService } from './service/CanActive/prelog.service';
import { PostlogService } from './service/CanActive/postlog.service';
import { AdminlogService } from './service/CanActive/adminlog.service';
import { FormPlatoComponent } from './component/formularios/form-plato/form-plato.component';
import { FormProveedorComponent } from './component/formularios/form-proveedor/form-proveedor.component';

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

    { path:"admin", canActivate:[AdminlogService], children:[
      { path:"ingrediente/create", component:FormIngredienteComponent},
      { path:"plato/create", component:FormPlatoComponent},
      { path:"proveedor/create", component:FormProveedorComponent},
    ]}

  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
