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

    apiKey: "AIzaSyAMcffWV6HrhrHzYtutocDwqb7188NzbYU",
    authDomain: "contactos-4f6c7.firebaseapp.com",
    databaseURL: "https://contactos-4f6c7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contactos-4f6c7",
    storageBucket: "contactos-4f6c7.appspot.com",
    messagingSenderId: "1073064455408",
    appId: "1:1073064455408:web:076b3fb118f74fb098a635"

    })
  
  }

}
