import { Component } from '@angular/core';
import { tasks } from 'src/app/core/data/tasks';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  toDoTasks: Task[] = tasks;
  inProgressTasks: Task[] = []
}
