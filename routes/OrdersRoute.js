import { placeOrder, updateOrderStatus } from "../controllers/OrdersController.js";
import express from "express";
const ordersRouter = express.Router();
ordersRouter.post("/place", placeOrder);
ordersRouter.put("/update/:id", updateOrderStatus);
export default ordersRouter;