const controller = require('../controllers/order.controller');
const router = require('express').Router();

// CRUD Routes /orders
const orderRoutes = () => {

    router.get('/', controller.getOrders);
    router.get('/:orderId', controller.getOrderById);
    router.post('/', controller.createOrder);
    router.patch('/:orderId', controller.updateOrder);
    router.delete('/:orderId', controller.deleteOrder);

    return router;
}


module.exports = orderRoutes;