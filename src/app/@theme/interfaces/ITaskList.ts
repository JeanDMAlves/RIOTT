import { IMember } from "./IMember";

export interface ITaskList {
    id?: string;
    memberId: string;
    name: string;
    status?: string;
    createdAt?: string;
    taskListItems: ITaskItem[];
    member?: IMember;
    totalDiscount?: number;
    failedTasks?: number;
}

export interface ITaskItem {
    taskId: string;
    discount: number;
    failed?: boolean;
    task?: {
        id: string;
        description: string;
    };
}
