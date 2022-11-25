import { TaskStatus } from "@app/models/Task";
import { StatusPipe } from "./status.pipe";

describe("StatusPipe", () => {
  it("create an instance", () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });
  it("should return IDLE->'Idle' & IN_PROGRESS->'In progress'", () => {
    expect(new StatusPipe().transform(TaskStatus.IDLE)).toBe("Idle");
    expect(new StatusPipe().transform(TaskStatus.IN_PROGRESS)).toBe(
      "In progress"
    );
    expect(new StatusPipe().transform(TaskStatus.DONE)).toBe("Done");
  });
});
