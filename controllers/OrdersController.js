//place order and update order status
import OrderModel from "../models/orderModel.js"; 
const placeOrder = async (req, res) => {
    const orderData = req.body;
    const order = await OrderModel.create(orderData);
    res.json(order);
}   


const updateOrderStatus = async (req, res) => {
    const orderId = req.params.id;
    const { status } = req.body;
    const order = await OrderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json(order);
}


export { placeOrder, updateOrderStatus }; 