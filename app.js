const express = require('express');
const bodyparser = require('body-parser');
const ordersRoutes = require('./routes/order.route')

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/orders', ordersRoutes());

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });

module.exports = app;