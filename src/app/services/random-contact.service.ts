import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Results } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomContactService {
  protocolo:string = "https";
  dominio:string ="randomuser.me";
  puerto:string="";
  raizContexo:string="/api";

  getUrl():string{

    let url:string = `${this.protocolo}//${this.dominio}`;

    if(this.puerto!==""){
      url += `:${this.puerto}`;
    }
    return `${url}${this.raizContexo}`;

  }

  constructor(private http:HttpClient) { }

  handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error(`Ha habido un error: ${error}`);
    }else{
      console.error(`Error en el backend: ${error.status}. Respuesta:${error.error}`);
    }

    return throwError(()=>new Error('Error en la petición de contacto aleatorio'));
  }

  //Obtener un contacto aleatorio, devuelve un Observable
  obtenerRandomContact(): Observable<Results>{

    let url:string="https://randomuser.me/api"

    return this.http.get<Results>(url).pipe( //.pipe es mas avanzado en Observable, gestionamos errores
      retry(2),//Numero de intentos antes de que salte el error
      catchError(this.handleError)//Sacamos error si algo falla
    );

  }

  obtenerRandomContacts(num:number, sexo?:string):Observable<Results[]>{ //para usar diferentes opciones he importado HttpParams

    let opciones:HttpParams = new HttpParams().set("results",num); //Le seteamos algunas propiedades, como limitar el numero de results

    if(sexo){
      //opciones.set("gender",sexo);
      opciones = opciones.append("gender",sexo);//los parametros, una vez que los hemos seteado podemos añadir nuevos, y tenemos que actualizarlo
    }

    let url:string="https://randomuser.me/api"

    return this.http.get<Results[]>(url, {params:opciones}).pipe( //.pipe es mas avanzado en Observable, gestionamos errores
      retry(2),//Numero de intentos antes de que salte el error
      catchError(this.handleError)//Sacamos error si algo falla
    );

  }
}
