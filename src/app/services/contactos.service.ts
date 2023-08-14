import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { DatosContactosService } from './datos-contactos.service';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contactos:Contacto[]=[];

  constructor(private datosContactos:DatosContactosService) {

    /*
    const contacto1 = new Contacto("Cris", "RR", "Aranjuez", "crisjefa@email.com",34,"mujer");
    const contacto2 = new Contacto("Fran", "PP", "Getafe", "fran@email.com",36,"hombre");
    const contacto3 = new Contacto("Laura", "QQ", "Pinto", "laura@email.com",44,"mujer");
    const contacto4 = new Contacto("Pedro", "CC", "Leganés", "pedro@email.com",51,"hombre");
    const contacto5 = new Contacto("Sara", "LL", "Alcorcón", "sara@email.com",18,"mujer");
    const contacto6 = new Contacto("Gustavo", "GG", "Oviedo", "gustavo@email.com",22,"hombre");

    this.contactos.push(contacto1, contacto2, contacto3,contacto4,contacto5,contacto6);*/

   }

   setContactos(misContactos:Contacto[]){

    this.contactos=misContactos;

  }

  //metodo que se encarga de obtener la informacion de DataService
  obtenerContactosBBDD(){

    return this.datosContactos.cargarContactos(); //Esto devuelve un Observable

  }

  agregarContactoServicio(contacto:Contacto){
    //Uso de firebase, despues de agregar un contacto al array contactos, tendre que enviar el array empleados(con los que ya meti en la bbdd en su dia), mas el que acabo de agregar
    this.contactos.push(contacto);
    console.log(this.contactos);

    //usamos firebase

    //Para hacer esto tenemos que usar el servicio datosContactoService.service, para eso inyecto el servicio data en este de contactos en el constructos
    this.datosContactos.guardarContacto(this.contactos);
  }
}
