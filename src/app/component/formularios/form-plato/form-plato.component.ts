import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-plato',
  templateUrl: './form-plato.component.html',
  styleUrls: ['./form-plato.component.scss']
})
export class FormPlatoComponent {
 
  NombreFormulario:FormGroup;

  constructor() { 
    this.NombreFormulario = new FormGroup({
      input: new FormControl('',[]),
      
      })
  }

}
