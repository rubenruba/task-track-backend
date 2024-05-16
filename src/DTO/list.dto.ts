export interface ListDTO {
    id: string;
    title: string;
    tasks: TaskListDTO[];
    users: string[];
}

export interface TaskListDTO {
    text: string;
    completed: boolean;
}