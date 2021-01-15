import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ti SERVICIOS
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  public logueado : boolean;

  constructor(
    private auth: AuthService,
    private router:Router,
    private token:TokenService
  ) { }

  ngOnInit(): void {
    this.auth.authStatus
    .subscribe(data => this.logueado = data)
  }

  logout(e:MouseEvent){
    e.preventDefault();
    this.auth.cambiaStatusAuth(false);
    this.router.navigateByUrl('/login');
    this.token.remove();
  }

}
