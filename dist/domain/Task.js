"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const moment_1 = __importDefault(require("moment"));
class Task {
    constructor(_id, _date, _text, _completed, _users) {
        this._id = _id;
        this._date = _date;
        this._text = _text;
        this._completed = _completed;
        this._users = _users;
    }
    get id() {
        return this._id;
    }
    set date(value) {
        this._date = value;
    }
    set text(value) {
        this._text = value;
    }
    set completed(value) {
        this._completed = value;
    }
    set users(value) {
        this._users = value;
    }
    static fromDTO(dto) {
        return new Task(dto.id, new Date(dto.date), dto.text, dto.completed, dto.users);
    }
    toDTO() {
        return {
            id: this._id,
            date: (0, moment_1.default)(this._date).format('YYYY-MM-DD'),
            text: this._text,
            completed: this._completed,
            users: this._users,
        };
    }
}
exports.Task = Task;
