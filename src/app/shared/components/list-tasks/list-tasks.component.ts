import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent {
  @Input() tasks: Task[] = [];


  start($event: DragEvent) {
    if ($event.dataTransfer) {
      $event.dataTransfer.effectAllowed = 'move';
      const targetElement = $event.target as HTMLElement;
      $event.dataTransfer?.setData('text', targetElement.id);
    }
  }

  over($event: DragEvent) {
    $event.preventDefault();
  }

  drop($event: DragEvent) {
    if ($event.dataTransfer) {
      const item = $event.dataTransfer.getData('text');
      let targetElement = $event.target as HTMLElement;

      if (targetElement.classList.contains('task-container')) {
        if (targetElement.parentElement)
          targetElement = targetElement.parentElement;
      }

      const elementToAppend = document.getElementById(item);
      if (elementToAppend && !targetElement.contains(elementToAppend)) {
        targetElement.appendChild(elementToAppend);
      }
      $event.stopPropagation();
    }
  }
}
