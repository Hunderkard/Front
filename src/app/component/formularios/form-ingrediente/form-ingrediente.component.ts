import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ingrediente',
  templateUrl: './form-ingrediente.component.html',
  styleUrls: ['./form-ingrediente.component.scss']
})
export class FormIngredienteComponent {
/* Sun-27/12 03:11:57 Para poner los nuevos ingredientes. */
  formulario:FormGroup;

  

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [   Validators.required]),
      precio: new FormControl('', [   Validators.required]),
      proveedor: new FormControl('', [   Validators.required]),
      fecha_compra: new FormControl('', [   Validators.required]),
      fecha_caducidad: new FormControl('', []),
      cantidad: new FormControl('', [  Validators.required]),
      unidad: new FormControl('', []),
      observaciones: new FormControl('', []),
      
    })
   }

   probando(){
     console.log(this.formulario);
   }


}