import mongoose from "mongoose";                                
const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
      quantity: { type: Number, required: true }
    }
  ],
  status: { type: String, enum: ["pending", "processing", "shipped", "delivered"], default: "pending" }
}); 

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;