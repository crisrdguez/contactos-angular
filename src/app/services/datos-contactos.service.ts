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
    
    return this.http.get("https://contactos-4f6c7-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth="+token);


    //Devolvernos los registros almacenados en firebase, asi lo hacia antes de usar la autenticacion
    //return this.http.get("https://mis-clientes-ce40f-default-rtdb.europe-west1.firebasedatabase.app/datos.json");

    


  }

  //Metodo que me permite guardar contactos en la bbdd
  guardarContacto(contactos:Contacto[]){

    //Si en vez de utilizar el metodo post usamos el metodo put, lo que hace es reemplazar la informacion que ya puede existir en la bbdd
    //con post se generaba un nuevo registro con todos los datos, mas los que voy agregando
    const token=this.loginService.getIdToken();
    this.http.put("https://contactos-4f6c7-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth="+token,contactos).subscribe({//copio la url y añado al final datos.json y lo que quiero guardar, en este caso contactos*/
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
}
