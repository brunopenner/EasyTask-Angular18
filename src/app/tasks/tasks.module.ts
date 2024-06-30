import { NgModule } from "@angular/core";
import { tasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        tasksComponent, 
        TaskComponent, 
        NewTaskComponent
    ],
    exports: [TaskComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})

export class TasksModule {}