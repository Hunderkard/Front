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
    this.logueado.next(value);
  }

  constructor( private Token: TokenService) { }
}
