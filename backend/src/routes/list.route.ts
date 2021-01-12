import { Router } from "express";
import { getLists, createList, updateList, deleteList } from "../controllers/list.controller";

const listRouter: Router = Router();

listRouter.get("/lists", getLists);

listRouter.post("/create-list", createList);

listRouter.put("/update-list/:id", updateList);

listRouter.delete("/delete-list/:id", deleteList);


export default listRouter;