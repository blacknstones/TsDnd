import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller";

const taskRouter: Router = Router();

taskRouter.get("/tasks", getTasks);

taskRouter.post("/create-task", createTask);

taskRouter.put("/update-task:id", updateTask);

taskRouter.delete("/delete-task:id", deleteTask);


export default taskRouter;