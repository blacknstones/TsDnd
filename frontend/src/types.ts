export type Task = {
    id: number,
    title: string,
    description: string
};

export type TaskMap = {
    [key: string]: Task[],
};

export type List = {
    id: number,
    title: string,
    taskOrder: [string]
}

/* export type ContextType = {
    
} */

