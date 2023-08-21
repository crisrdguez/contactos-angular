import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token:string='';


  constructor(private router:Router, private cookies:CookieService) { }

  login(email:string,password:string){

    //Promesa
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      //capturar el token y redirigir a la pagina de inicio
      response=>{firebase.auth().currentUser?.getIdToken().then(

        token=>{

          this.token=token;
          //despues de generar el token lo guardamos en una cookie
          this.cookies.set("token",this.token);
          //redireccionamos
          //console.log("El token es " + this.token);
          this.router.navigate(['/areaprivada']);

        }

      )}

    )

  }

  getIdToken(){
    let cookie = this.cookies.get("token");
    return cookie;

    //podria hacerse: return this.cookies.get("token");
  }

  estaLogueadoService(){
    if(this.cookies.get("token")){
      return true;
    }else{
      return false;
    }
    //return this.cookies.get("token");
  }

  logoutService(){
    firebase.auth().signOut().then(()=>{

      this.token='';

      this.cookies.set("token",this.token);

      this.router.navigate(['/home']);

      window.location.reload(); //actualiza la pagina
    })
  }
}
