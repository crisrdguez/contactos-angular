import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private loginservice:LoginService){

  }

  estaLogueado(){
    return this.loginservice.estaLogueadoService();
  }

  logout(){
    this.loginservice.logoutService();
  }

}
