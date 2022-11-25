import { Pipe, PipeTransform } from "@angular/core";
import { TaskStatus } from "@app/models/Task";

@Pipe({
  name: "taskStatus",
})
export class StatusPipe implements PipeTransform {
  transform(value: TaskStatus): string {
    switch (value) {
      case "IDLE":
        return "Idle";
      case "IN_PROGRESS":
        return "In progress";
      case "DONE":
        return "Done";
      default:
        return "";
    }
  }
}
