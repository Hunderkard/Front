import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-form-ingrediente',
  templateUrl: './form-ingrediente.component.html',
  styleUrls: ['./form-ingrediente.component.scss']
})
export class FormIngredienteComponent {
/* Sun-27/12 03:11:57 Para poner los nuevos ingredientes. */
  formulario:FormGroup;
  imgUrl:string = null;
  

  constructor( private server:DatosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [   Validators.required]),
      precio: new FormControl('', [   Validators.required]),
      proveedor: new FormControl('', [   Validators.required]),
      fecha_compra: new FormControl('', [   Validators.required]),
      fecha_caducidad: new FormControl('', []),
      cantidad: new FormControl('', [  Validators.required]),
      unidad: new FormControl('', []),
      observaciones: new FormControl('', []),
      imagen: new FormControl('', []),
      
    })
   }

   onSubmit(){
     console.log(this.formulario);
     console.error(this.formulario.value.fecha_compra);
     this.server.createIngrediente(this.formulario).subscribe(
       data => console.log(data),
       error => console.warn(error),
     );
   }

   //Para la imagen.
   onChange(event){
    let reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.formulario.patchValue({
          imagen: reader.result
        });
        this.imgUrl = reader.result as string;
      };
    }
   }

}
