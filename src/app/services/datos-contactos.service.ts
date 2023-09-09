/*

COMENTO ESTE SERVICIO - PREFIERO SIMULAR LA BBDD PARA MAYOR SEGURIDAD

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class DatosContactosService {

  constructor(private http:HttpClient, private loginService:LoginService) { }

  //Primero tengo que conectar con la bbdd para traerme los empleados que hay alli guardados, en vez de hacerlo con empleados.service
  cargarContactos(){

    //usando autenticacion con firebase
    //tenemos que decirle que cargue los contactos utilizando la autenticacion firmada en el token, por eso hemos inyectado en el constructor el loginservice
    const token=this.loginService.getIdToken();
    
    //Ya no existe la BBDD en firebase, la borre por seguridad
    return this.http.get("https://contactosapp-6f472-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth="+token);
    


    //Devolvernos los registros almacenados en firebase, asi lo hacia antes de usar la autenticacion
    //return this.http.get("https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos.json");

    


  }

  //Metodo que me permite guardar contactos en la bbdd
  guardarContacto(contactos:Contacto[]){

    //Si en vez de utilizar el metodo post usamos el metodo put, lo que hace es reemplazar la informacion que ya puede existir en la bbdd
    //con post se generaba un nuevo registro con todos los datos, mas los que voy agregando
    const token=this.loginService.getIdToken();

    //Ya no existe la BBDD en firebase, la borre por seguridad
    this.http.put("https://contactosapp-6f472-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth="+token,contactos).subscribe({
    next(response){
        console.log("Se han guardado los contactos: " + response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete() {
        console.info('Completado')
      },
    })

  }

  //Metodo que permite eliminar contactos de la lista
  eliminaContacto(id:string){
    const token=this.loginService.getIdToken();

    //Ya no existe la BBDD en firebase, la borre por seguridad
    let url = `https://contactosapp-6f472-default-rtdb.europe-west1.firebasedatabase.app/datos/${id}.json?auth=${token}`;

    this.http.delete(url).subscribe({
      next(response){
        console.log("Se han borrado el empleado: " + response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete() {
        console.info('Completado borrado empleado')
      },
    })

  }

}*/
