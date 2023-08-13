import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss'],
  //Metadatos para animación del componente
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      //Otro estado
      state('inactive',style({
        transform: 'translate(40px, 50px)'
      })),
      //Otro estado - subir
      state('sube',style({
        transform: 'translateY(-60px)'
      })),
      //Otro estado - bajar
      state('baja',style({
        transform: 'translateY(60px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')), //transicion que pasa de inactivo a activo, una animacion en 1 segundo
      transition('active => inactive', animate('1000ms ease-out')),
      transition('sube => baja', animate('1000ms ease-in')), //transicion que pasa de inactivo a activo, una animacion en 1 segundo
      transition('baja => sube', animate('1000ms ease-out')),

    ])
  ]
})
export class AnimacionComponent implements OnInit{

  estado1:string = 'inactive;'
  estado2:string = 'inactive;'

  constructor(){}

  ngOnInit(): void {

    setInterval(()=>{
      if(this.estado1=='active'){
        this.estado1='inactive';
      }else{
        this.estado1='active';
      }

    },1000)
      

  }

  subir(){
    this.estado2='sube';
  }

  bajar(){
    this.estado2='baja';
  }

}
