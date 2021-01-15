import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  BackUrl = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  login(formulario){
    return this.http.post(`${this.BackUrl}/login`,{
      "email" : formulario.controls.email.value, 
      "password" : formulario.controls.password.value});
  }

  register(formulario){
    return this.http.post(`${this.BackUrl}/register`, {
      "name" : formulario.controls.nombre.value,
      "email" : formulario.controls.email.value,
      "password" : formulario.controls.password.value,
    });
  }
}