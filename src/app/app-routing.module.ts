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

// ha PARA SEPARAR LOS COMPOENTES PUBLICOS DE LOS PRIVADOS
const routes: Routes = [
  
  { path:"login", component:LoginComponent,
    canActivate: [PrelogService],
  },
  { path:"register", component:RegisterComponent,
    canActivate: [PrelogService],
  },
  { path:"perfil", component:PerfilComponent,
    canActivate: [PostlogService],
  },
  { path:"ingrediente/create", component:FormIngredienteComponent,
    canActivate: [PostlogService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
