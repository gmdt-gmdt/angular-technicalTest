export class Task {
  id: number | undefined;
  status: TaskSatus = TaskSatus.IDLE;
  task: string = "";
}

export enum TaskSatus {
  IDLE, 
  InProgress, 
  Done,
}