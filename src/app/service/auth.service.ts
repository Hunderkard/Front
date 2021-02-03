import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

/*
 
 88      dP"Yb   dP""b8 88   88 888888    db    8888b.   dP"Yb  
 88     dP   Yb dP   `" 88   88 88__     dPYb    8I  Yb dP   Yb 
 88  .o Yb   dP Yb  "88 Y8   8P 88""    dP__Yb   8I  dY Yb   dP 
 88ood8  YbodP   YboodP `YbodP' 888888 dP""""Yb 8888Y"   YbodP  
 
*/
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

/*
 
 88     888888 Yb    dP 888888 88     
 88     88__    Yb  dP  88__   88     
 88  .o 88""     YbdP   88""   88  .o 
 88ood8 888888    YP    888888 88ood8 
 
*/

  private level = new BehaviorSubject <number> (this.Token.level());
  authLevel = this.level.asObservable();

cambiaLevelAuth($value = null){

 this.level.next($value ?? this.Token.level());
 
}

  constructor( private Token: TokenService) { }
}
