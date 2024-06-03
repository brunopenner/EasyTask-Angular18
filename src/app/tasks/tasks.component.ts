import { Component, Input } from "@angular/core";

@Component ({
    selector: "app-tasks",
    standalone: true,
    imports: [],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})

export class tasksComponent {
    @Input ({required: true}) userid!:string;

}