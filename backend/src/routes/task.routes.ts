import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller";

const taskRouter: Router = Router();

taskRouter.get("/tasks", getTasks);

taskRouter.post("/tasks", createTask);

taskRouter.put("/tasks/:id", updateTask);

taskRouter.delete("/tasks/:id", deleteTask);


export default taskRouter;