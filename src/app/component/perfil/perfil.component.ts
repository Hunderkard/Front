import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent  {

  public level: number;

  constructor(private auth: AuthService,){
    this.auth.authLevel.subscribe(data => { this.level = data;})
  }


}
