import { NgModule } from "@angular/core";
import { tasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [
        tasksComponent, 
        TaskComponent, 
        NewTaskComponent
    ],
    exports: [TaskComponent]
})

export class TasksModule {}