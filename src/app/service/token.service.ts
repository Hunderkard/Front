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

    if(token) {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if(payload){ 
        return  Object.values(this.iss)     // ps Array de los valores del objeto.
                .indexOf(payload.iss)       // ps Busca el que tienes. 0 ó 1 en este caso.
                > -1 ? true : false;        // ps Si lo encuentra o no.
      }
    }
    return false;
  }
}
