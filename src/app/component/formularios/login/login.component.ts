import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient) {

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

   dandole(){    // fu Por ahora sólo devuelve el objeto formulario, para hacer pruebas.

    return this.http.post('http://localhost:8000/login',{
      "email" : this.formulario.controls.email.value, 
      "password" : this.formulario.controls.password.value}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
     

    // this.formulario.setValue(this.usuarioPrueba);  // si Aquí se pasa un objeto con la misma estructura y listo.
   }

 

}
