import { Router } from "express";
import { getLists, createList, updateList, deleteList } from "../controllers/list.controller";

const listRouter: Router = Router();

listRouter.get("/lists", getLists);

listRouter.post("/lists", createList);

listRouter.put("/lists/:id", updateList);

listRouter.delete("/lists/:id", deleteList);


export default listRouter;