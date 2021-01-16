import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ti SERVICIOS
import { DatosService } from 'src/app/service/datos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formulario:FormGroup;
  public error = null;
 
  constructor( private server:DatosService,
                private token:TokenService,
                private router:Router) {

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
      this.noIguales.bind( this.formulario )
    ])
   }


   noIguales(input:FormControl):{[s:string]:boolean}{

    let form:any = this;

    if(input.value !== form.controls.password.value) return {diferentes:true}; /* Si hay algún retorno, es que hubo error. */
    return null;
  }

   onSubmit(){    // fu Por ahora sólo devuelve el objeto formulario, para hacer pruebas.
    
    this.server.register(this.formulario)
    .subscribe(
      data => this.manejoRespuesta(data),
      error => this.manejoError(error)
    )
  }

  manejoRespuesta(res){
    this.token.set(res.token);
    this.router.navigateByUrl('/perfil'); 
  }
  
  manejoError(e: { status: any; }){
    console.log(e);
    this.error = e.status;
  }
}