import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
// ps Aquí realizo los POST para retornar observables.
// ps Los otros componentes sólo harán el .subscribe.

  BackUrl = 'http://localhost:8000';
  
  constructor(private http:HttpClient, private token:TokenService) {

  }
  
  login(formulario){
    return this.http.post(`${this.BackUrl}/login`, {
      "email" : formulario.controls.email.value, 
      "password" : formulario.controls.password.value
    });
  }

  register(formulario){
    return this.http.post(`${this.BackUrl}/register`, {
      "name" : formulario.controls.nombre.value,
      "email" : formulario.controls.email.value,
      "password" : formulario.controls.password.value,
    });
  }

  sendEmailPassReset(formulario){
    return this.http.post(`${this.BackUrl}/sendPasswordReset`, {
      "email": formulario.controls.email.value
    });
  }

  changePass(formulario){
    return this.http.post(`${this.BackUrl}/changePasswordReset`, {
      "email": formulario.controls.email.value,
      "password": formulario.controls.password.value,
      "token": formulario.controls.resetToken.value,
    });
  }


/*
 
 88 88b 88  dP""b8 88""Yb 888888 8888b.  88 888888 88b 88 888888 888888 .dP"Y8         
 88 88Yb88 dP   `" 88__dP 88__    8I  Yb 88 88__   88Yb88   88   88__   `Ybo."         
 88 88 Y88 Yb  "88 88"Yb  88""    8I  dY 88 88""   88 Y88   88   88""   o.`Y8b         
 88 88  Y8  YboodP 88  Yb 888888 8888Y"  88 888888 88  Y8   88   888888 8bodP'         
 
*/

createIngrediente(formulario){
  const pruebaHeaders = new HttpHeaders({
    'content-type' : 'aplication/json',
    'Authorization' : `bearer ${this.token.get()}`
  });


   return this.http.post(`${this.BackUrl}/ingredientes`, 
   {
    "nombre": formulario.value.nombre,
    "precio": formulario.value.precio,
    "proveedor": formulario.value.proveedor,
    "fecha_compra": formulario.value.fecha_compra,
    "fecha_caducidad": formulario.value.fecha_caducidad,
    "cantidad": formulario.value.cantidad,
    "unidad": formulario.value.unidad,
    "observaciones": formulario.value.observaciones,
    "imagen": formulario.value.imagen,
  },
  {
    headers: pruebaHeaders,
  }
  
  );
}
}
