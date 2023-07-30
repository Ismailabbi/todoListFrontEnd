import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { IdGeneratorPipe } from './pipe/id-generator.pipe';



@NgModule({
  declarations: [
    TaskComponent,
    ListTasksComponent,
    IdGeneratorPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TaskComponent,
    ListTasksComponent,
    IdGeneratorPipe
  ],
})
export class SharedModule { }
