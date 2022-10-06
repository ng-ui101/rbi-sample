import {ITodoItem} from "./ITodoItem";

export interface ITodosRequest {
    data: ITodoItem[];
    count: number;
}
