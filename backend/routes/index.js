import express from "express";
import AuthRouter from "./authRoutes.js";
import { PrismaClient } from "@prisma/Client"

export const prisma = new PrismaClient({
    log: ["query"],
})



const rootRouter = express.Router();


rootRouter.use('/auth',AuthRouter )


export default rootRouter;