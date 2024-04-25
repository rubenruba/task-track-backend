import { TaskDTO } from "../DTO/task.dto";

export class Task {
  constructor(
    private _id: string,
    private _date: Date,
    private _text: string,
    private _completed: boolean,
    private _users: string[]
  ) {}

  get id() {
    return this._id;
  }

  static fromDTO(dto: TaskDTO): Task {
    return new Task(
      dto.id,
      new Date(dto.date),
      dto.text,
      dto.completed,
      dto.users
    );
  }

  toDTO(): TaskDTO {
    return {
      id: this._id,
      date: this._date.getTime(),
      text: this._text,
      completed: this._completed,
      users: this._users,
    };
  }
}
