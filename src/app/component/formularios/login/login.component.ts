import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() {

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

   comprobarUsuario(){    // fu Por ahora sólo devuelve el objeto formulario, para hacer pruebas.
     console.log(this.formulario.controls);

     this.formulario.setValue(this.usuarioPrueba);  // si Aquí se pasa un objeto con la misma estructura y listo.
   }

 

}
