import { ListDTO, TaskListDTO } from "../DTO/list.dto";

export class List {
  constructor(
    private _id: string,
    private _title: string,
    private _tasks: TaskListDTO[],
    private _users: string[],
  ) {}

  get id() {
    return this._id;
  }

  set title(value: string) {
    this._title = value;
  }
  set users(value: string[]) {
    this._users = value;
  }
  set tasks(value: TaskListDTO[]) {
    this._tasks = value;
  }


  static fromDTO(dto: ListDTO): List {
    return new List(
      dto.id,
      dto.title,
      dto.tasks,
      dto.users,
    );
  }

  toDTO(): ListDTO {
    return {
      id: this._id,
      title: this._title,
      tasks: this._tasks,
      users: this._users,
    };
  }
}
