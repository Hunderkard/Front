import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formulario:FormGroup;

 
  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [   Validators.required,
                                      Validators.minLength(4)]),
      email: new FormControl('', [    Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [ Validators.required,
                                      Validators.minLength(6)]),
      repetida: new FormControl() // ti Abajo los validators.

    })

    // ti Aquí los validators.
    // fu No funciona .bind() arriba.
    this.formulario.controls.repetida.
    setValidators([
      Validators.required,
      this.noIguales.bind( this.formulario )])
   }


   noIguales(input:FormControl):{[s:string]:boolean}{

    let form:any = this;

    if(input.value !== form.controls.password.value) return {Diferentes:true}; /* Si hay algún retorno, es que hubo error. */
    return null;
  }

   probando(){    // fu Por ahora sólo devuelve el objeto formulario, para hacer pruebas.
    console.log(this.formulario.controls);

  }


}