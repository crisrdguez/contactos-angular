import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-drag-drop-task',
  templateUrl: './drag-drop-task.component.html',
  styleUrls: ['./drag-drop-task.component.scss']
})
export class DragDropTaskComponent {

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
  /*
  pendientes2 = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  realizadas2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];*/

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
