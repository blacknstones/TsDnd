import { Router } from "express";
import { createUser, updateUser, loginUser, deleteUser } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("/register", createUser);

userRouter.post("/login", loginUser);

userRouter.put("/user/:id", updateUser);

userRouter.delete("/user/:id", deleteUser);

export default userRouter;