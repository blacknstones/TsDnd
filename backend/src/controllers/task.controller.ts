import { Request, Response } from "express";
import Task from "../models/task.model";
import { ITask } from "../types/task";

const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks: ITask[] = await Task.find();
      res.status(200).json({ tasks });
    } catch (error) {
      throw error;
    }
  }

const createTask = async (req: Request, res: Response) => {
    try {
        const body = req.body as Pick<ITask, "title" | "description">
    
        const task: ITask = new Task({
          title: body.title,
          description: body.description
        })
    
        const newTask: ITask = await task.save();
        const allTasks: ITask[] = await Task.find();
    
        res.status(201).json({ message: "Task added", task: newTask, tasks: allTasks });

      } catch (error) {
        throw error;
      }

}

const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req;

      const updateTask: ITask | null = await Task.findByIdAndUpdate(
        { _id: id },
        body
      );

      const allTasks: ITask[] = await Task.find()
      res.status(200).json({
        message: "Task updated",
        task: updateTask,
        tasks: allTasks,
      });

    } catch (error) {
      throw error;
    }
  }

  const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedTask: ITask | null = await Task.findByIdAndRemove(
        req.params.id
      )
      const allTasks: ITask[] = await Task.find()
      res.status(200).json({
        message: "Todo deleted",
        task: deletedTask,
        tasks: allTasks,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getTasks, createTask, updateTask, deleteTask };