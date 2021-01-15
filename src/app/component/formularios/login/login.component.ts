import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ti SERVICIOS
import { DatosService } from 'src/app/service/datos.service';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario:FormGroup; // bi Este objeto controlará la lógica del formulario.

  usuarioPrueba:Object = {    // si Checkea tremendo trucazo.
    email:"probando@gmail.com",
    password:"12341234"
  }

  // fu Errores
  public error = null;  

  constructor(  private server:DatosService,
                private token:TokenService,
                private auth:AuthService,
                private router: Router) {

    // bi El Group tiene dentro varios Control ('por defecto', validación, validación asíncrona).
    // bi También puede tener otro Group con varios Control dentro, si le metes un objeto a otro.
    this.formulario = new FormGroup({
      email: new FormControl('',    [ Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
      password: new FormControl('', [ Validators.required,
                                      Validators.minLength(6)
                                    ])
    })
   }

  onSubmit(){    // fu Por ahora sólo devuelve el objeto formulario, para hacer pruebas.

    return this.server.login(this.formulario)
      .subscribe(
          data => this.manejoRespuesta(data),
          error => this.manejoError(error)
      );
    

  // this.formulario.setValue(this.usuarioPrueba);  // si Aquí se pasa un objeto con la misma estructura y listo.
  }

  manejoRespuesta(res){
    this.token.set(res.token);
    this.auth.cambiaStatusAuth(true);
    this.router.navigateByUrl('/perfil');
  }

  manejoError(e){
    console.log(e);
    this.error = e.status;
  }

}