import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Contactos';
  constructor(private loginservice:LoginService){

  }

  ngOnInit(): void {

    firebase.initializeApp({
      
      apiKey: "AIzaSyAxLM4FgZehz21Ef5IF-HiFwTljlzkwi6Q",
      authDomain: "proyecto-angular-crisdev.firebaseapp.com",
      projectId: "proyecto-angular-crisdev",
      storageBucket: "proyecto-angular-crisdev.appspot.com",
      messagingSenderId: "488802954020",
      appId: "1:488802954020:web:fc3e71d48d9c9fdb3b61b1"

    })
  
  }

  estaLogueado(){
    return this.loginservice.estaLogueadoService();
  }

}
