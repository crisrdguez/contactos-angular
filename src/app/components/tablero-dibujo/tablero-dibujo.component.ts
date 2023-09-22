import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero-dibujo',
  templateUrl: './tablero-dibujo.component.html',
  styleUrls: ['./tablero-dibujo.component.scss']
})
export class TableroDibujoComponent implements OnInit{

  constructor(){}

  estado:boolean=false;
  numFilas:number=50;
  numColumnas:number=60;
  casillas: number[][] = [];
  //Colores paleta
  colores: string[] = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6','color7','color8','color9','color10'];
  miColor: string = 'color1'; // Color por defecto


  ngOnInit(): void {
      this.dibujaTablero(this.numFilas, this.numColumnas);
  }

  dibujaTablero(filas:number, columnas:number):void{
    this.casillas = [];
    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        fila.push(j); // Puedes inicializar los valores según tus necesidades
      }
      this.casillas.push(fila);
    }
  }

  //metodo cambio de color en la paleta
  cambioColor(color:string){
    this.miColor = color;
  }

  comienzaPintar(){
    if(this.estado){
      this.estado=false;
    }else if(!this.estado){
      this.estado=true;
    }
  }

  pintar(event: MouseEvent) {
    const casilla = event.target as HTMLTableCellElement; // Obtén la casilla en la que se está pintando
    casilla.className = this.miColor; // Cambia la clase para cambiar el color
  }

  pintarTouch(event: TouchEvent) {
    event.preventDefault();
    const touches = event.touches;
    if (touches && touches.length > 0) {
      const touch = touches[0];
      const elemento = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLTableCellElement;
  
      if (elemento && elemento.tagName === 'TD') {
        elemento.className = this.miColor;
      }
    }
  }

}
