export interface TaskDTO {
    id: string;
    date: number;
    text: string;
    completed: boolean;
    users: string[];
}