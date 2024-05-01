import moment from "moment";
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

  set date(value: Date) {
    this._date = value;
  }
  set text(value: string) {
    this._text = value;
  }
  set completed(value: boolean) {
    this._completed = value;
  }
  set users(value: string[]) {
    this._users = value;
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
      date: moment(this._date).format('YYYY-MM-DD'),
      text: this._text,
      completed: this._completed,
      users: this._users,
    };
  }
}
