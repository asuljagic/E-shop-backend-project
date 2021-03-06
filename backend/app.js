const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

require('dotenv/config');
app.use(cors());
app.options('*', cors());


const api = process.env.API_URL;

// routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");


// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt); //added authentication security for APIs
app.use(errorHandler);

// routers
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

const Product = require('./models/product');




mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Database Connection is ready...');
}).catch((err) => {
    console.log(err);
})


app.listen(3000, () => { 
    console.log('Server is running http://localhost:3000');
}) 