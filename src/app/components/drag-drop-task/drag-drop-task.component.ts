import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-drag-drop-task',
  templateUrl: './drag-drop-task.component.html',
  styleUrls: ['./drag-drop-task.component.scss']
})
export class DragDropTaskComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    const storedPendientes = localStorage.getItem('pendientes');
    const storedRealizadas = localStorage.getItem('realizadas');
  
    if (storedPendientes && storedRealizadas) {
      this.pendientes = JSON.parse(storedPendientes);
      this.realizadas = JSON.parse(storedRealizadas);
    } else {
      localStorage.setItem('pendientes', JSON.stringify(this.pendientes));
      localStorage.setItem('realizadas', JSON.stringify(this.realizadas));
    }
  }

  pendientes:ITask[]=[
    {
      title:'Animacion',
      description:'Aprender animaciones en angular',
      completed:true,
      level:LEVELS.Facil
    },
    {
      title:'angular',
      description:'Aprender angular avanzado',
      completed:false,
      level:LEVELS.Dificil
    },
    {
      title:'Java',
      description:'Aprender java avanzado',
      completed:true,
      level:LEVELS.Urgente
    },
    {
      title:'HolaMundo',
      description:'Crear un hola mundo en angular',
      completed:true,
      level:LEVELS.Facil
    }
  ]

  realizadas:ITask[]=[
    {
      title:'tarea1',
      description:'Aprender animaciones en angular',
      completed:true,
      level:LEVELS.Facil
    },
    {
      title:'tarea2',
      description:'Aprender animaciones en angular',
      completed:true,
      level:LEVELS.Media
    },
    {
      title:'tarea3',
      description:'Aprender animaciones en angular',
      completed:true,
      level:LEVELS.Dificil
    },
    {
      title:'tarea4',
      description:'Aprender animaciones en angular',
      completed:false,
      level:LEVELS.Urgente
    }
  ]


  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {

      console.log('misma columna:',event);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      console.log('entre columnas:',event);
      console.log('Debemos cambiar el estado de las task');

      //Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed 
      

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);

          localStorage.setItem('pendientes', JSON.stringify(this.pendientes));
          localStorage.setItem('realizadas', JSON.stringify(this.realizadas));
    }
  }
}
