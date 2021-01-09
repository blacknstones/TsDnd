export type Task = {
    id: number,
    title: string,
    description: string,
};

export type TaskMap = {
    [key: string]: Task[],
  };