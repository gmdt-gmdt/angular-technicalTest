import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Task, TaskStatus } from "../models/Task";
import { TaskService } from "../services/tasks/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent {
  taskList$!: Observable<any[]>;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskList$ = this.taskService.getTasklist();
  }

  deleteTask(taskId: number | undefined) {
    if (confirm("are you sure you want to delete this task"))
      this.taskService.deleteTask(taskId).subscribe({
        next: () => this.getTaskList(),
        error: (x) => console.log("Get all tasks: error: " + x),
      });
  }

  updateTask(task: Task) {
    switch (task.status) {
      case TaskStatus.IDLE:
        task.status = TaskStatus.IN_PROGRESS;
        break;
      case TaskStatus.IN_PROGRESS:
        task.status = TaskStatus.DONE;
        break;
    }
    this.taskService.updateTask(task?.id, task).subscribe({
      next: () => this.getTaskList(),
      error: (x) => console.log("Update task: error: " + x),
    });
  }

  getEnumTask(taskStatus: any, statusList: any) {
    return statusList.filter((x: any) => x == taskStatus.toString()).length > 0;
  }
}
