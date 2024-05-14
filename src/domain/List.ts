import { ListDTO } from "../DTO/list.dto";

export class List {
  constructor(
    private _id: string,
    private _title: string,
    private _tasks: string[],
    private _users: string[],
    private _color: string,
  ) {}

  get id() {
    return this._id;
  }

  set title(value: string) {
    this._title = value;
  }
  set color(value: string) {
    this._color = value;
  }

  static fromDTO(dto: ListDTO): List {
    return new List(
      dto.id,
      dto.title,
      dto.tasks,
      dto.users,
      dto.color,
    );
  }

  toDTO(): ListDTO {
    return {
      id: this._id,
      title: this._title,
      tasks: this._tasks,
      users: this._users,
      color: this._color,
    };
  }
}
