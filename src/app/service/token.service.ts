import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login:'http://localhost:8000/login',
    register: 'http://localhost:8000/resgister'
  };

  constructor() { }

  set(token){
    console.log("Hago Set al token");
    localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  logueado(){
    const token = this.get();
    console.log("Comprobando si está tiene el token.")
    if(token) {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if(payload){ 
        console.log("Sí, tiene el token.")
        return  Object.values(this.iss)     // ps Array de los valores del objeto.
                .indexOf(payload.iss)       // ps Busca el que tienes. 0 ó 1 en este caso.
                > -1 ? true : false;        // ps Si lo encuentra o no.
      }
    }
    console.log("No, no tiene el token.");
    return false;
  }
}
