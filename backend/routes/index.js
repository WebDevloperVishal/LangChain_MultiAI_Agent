import express from "express";
import AuthRouter from "./authRoutes.js";

const rootRouter = express.Router();


rootRouter.use('/auth',AuthRouter )


export default rootRouter;