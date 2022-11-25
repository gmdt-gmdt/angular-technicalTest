import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Task, TaskStatus } from "@app/models/Task";
import { asyncScheduler, of, scheduled } from "rxjs";

import { TaskService } from "./task.service";

describe("TaskService", () => {
  let service: TaskService;
  let taskService: jasmine.SpyObj<TaskService>;

  beforeEach(() => {
    taskService = jasmine.createSpyObj("TaskService", [
      "createTask",
      "getTasklist",
      "updateTask",
      "deleteTask",
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: TaskService,
          useValue: taskService,
        },
      ],
    });
    service = TestBed.inject(TaskService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("getTasklist should call service", () => {
    taskService.getTasklist.and.returnValue(scheduled([], asyncScheduler));
    service.getTasklist();
    expect(taskService.getTasklist).toHaveBeenCalled();
  });
});
