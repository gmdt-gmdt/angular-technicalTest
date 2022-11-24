import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskSatus } from '../models/Task';
import { TaskService } from '../services/tasks/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  
  taskForm = new FormGroup({
    task: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(120),
      Validators.required
      ]
    ),
    status: new FormControl(TaskSatus[0])
  });

  constructor(private taskService: TaskService) { }

  onAddTask() {
    console.log(this.taskForm.value)

    this.taskService.createTask(this.taskForm.value).subscribe(res => {
      console.log("ok")
    }, err => {
      console.log(err)
    });
  }
}
