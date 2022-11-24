import { Component } from "@angular/core";
import { Task, TaskSatus } from "../models/Task";
import { TaskService } from "../services/tasks/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent {
  public taskList: Array<Task> | undefined;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskService.getTasklist().subscribe(
      (res: any) => {
        this.taskList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTask(taskId: number | undefined) {
    if (confirm("are you sure you want to delete this task"))
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.getTaskList();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateTask(task: Task) {
    switch (task.status) {
      case TaskSatus.IDLE:
        task.status = TaskSatus.InProgress;
        break;
      case TaskSatus.InProgress:
        task.status = TaskSatus.Done;
        break;
    }

    this.taskService.updateTask(task?.id, task).subscribe(
      (res) => {
        this.getTaskList();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEnumTask(taskStatus: any, statusList: any) {
    return statusList.filter((x: any) => x == taskStatus.toString()).length > 0;
  }
}
