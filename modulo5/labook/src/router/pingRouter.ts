import { Router } from "express";
import { pingController } from "../UserDependences";

export const pingRouter = Router();
pingRouter.get("/", pingController.ping);
