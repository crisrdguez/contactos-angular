import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  /*Esto lo quitamos porque estos valores nos lo pasara el propio formulario
  email:string="";
  pass:string="";*/

  constructor(private router:Router, private loginService:LoginService){

  }

  ngOnInit(): void {
    
      let token = sessionStorage.getItem('token');

      if(token){
        this.router.navigate(['home']);
      }
  }

  loginUser(value:any){ //aqui recibiriamos un objeto

    let {email, password} = value; //de esta manera accederiamos a ellos

    this.loginService.login(email,password);

    /*this.loginService.login(email, password).subscribe({
      next(value) {
        if(value.token){
          sessionStorage.setItem('token',value.token);
          
        }

      },
      error(err) {
        console.error(`Ha ocurrido un error ${err}`)
      },
      complete() {
        console.info('Se ha completado la llamada de login')
      },
    }
    ) */

  }

}
