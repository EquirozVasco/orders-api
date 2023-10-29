const Order = require('../models/order.model');

// CRUD Controllers

//get all orders
exports.getOrders = (req, res, next) => {
    whereClause = {};
    if(req.query.status){
        whereClause.status = req.query.status
    }
    if(req.query.code){
        whereClause.code = req.query.code
    }
    if(req.query.name){
        whereClause.name = req.query.name
    }

    Order.findAll({
        where: whereClause
    })
        .then(orders => {
            res.status(200).json(orders);
        })
        .catch(err => res.json({err}));
}

//get order by id
exports.getOrderById = (req, res, next) => {
    const orderId = req.params.orderId;
    Order.findByPk(orderId)
        .then(order => {
            if (!order) {
                return res.status(404).json({ message: 'order not found!' });
            }
            res.status(200).json({ order: order });
        })
        .catch(err => console.log(err));
}

//create order
exports.createOrder = (req, res, next) => {
    const code = req.body.code;
    const name = req.body.name;
    const status = req.body.status;
    Order.create({
        code: code,
        name: name,
        status: status
    })
        .then(result => {
            console.log('Created Order');
            res.status(201).json({
                message: 'Order created successfully!',
                order: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//update order
exports.updateOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    const updatedName = req.body.name;
    const updatedStatus = req.body.status;
    Order.findByPk(orderId)
        .then(order => {
            if (!order) {
                return res.status(404).json({ message: 'Order not found!' });
            }
            order.name = updatedName;
            order.status = updatedStatus;
            return order.save();
        })
        .then(result => {
            res.status(200).json({ message: 'Order updated!', order: result });
        })
        .catch(err => console.log(err));
}

//delete order
exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    Order.findByPk(orderId)
        .then(order => {
            if (!order) {
                return res.status(404).json({ message: 'Order not found!' });
            }
            return Order.destroy({
                where: {
                    id: orderId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'Order deleted!' });
        })
        .catch(err => console.log(err));
}