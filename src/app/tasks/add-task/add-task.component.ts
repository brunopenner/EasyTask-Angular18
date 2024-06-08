import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Include CommonModule and FormsModule
})
export class AddTaskComponent {
  isFormVisible = false;
  task: { name: string, description: string, dueDate: string } | null = null;

  showForm() {
    this.isFormVisible = true;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.task = {
        name: form.value.name,
        description: form.value.description,
        dueDate: form.value.dueDate
      };
      form.reset();
      this.isFormVisible = false;  // Hide form after submission
    }
  }
}