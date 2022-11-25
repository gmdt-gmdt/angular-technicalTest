import { Pipe, PipeTransform } from "@angular/core";
import { Task, TaskStatus } from "@app/models/Task";

@Pipe({
  name: "strikeText",
})
export class StrikeTextPipe implements PipeTransform {
  transform(desc: string, task: Task): string {
    console.log(task);
    return task.status === TaskStatus.DONE ? `<del>${desc}</del>` : desc;
  }
}
