export class Task {
  id: number | undefined;
  status: TaskStatus = TaskStatus.IDLE;
  task: string = "";
}

export enum TaskStatus {
  IDLE = "IDLE",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
