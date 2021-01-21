import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logueado = new BehaviorSubject <boolean> (this.Token.logueado());
  authStatus = this.logueado.asObservable();

  cambiaStatusAuth(value: boolean){
    console.log("Cambiando el status de " + this.logueado.getValue() + " a " +
    value);
   this.authStatus.subscribe(data => console.warn("antes:" + data));
    this.logueado.next(value);
  this.authStatus.subscribe(data => console.warn("despues:" + data));
    console.error("logueado:" + this.logueado.getValue());
  }

  constructor( private Token: TokenService) { }
}
