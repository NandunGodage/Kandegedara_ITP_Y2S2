const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config();
const dbConnection = require('../kandegedara-backend/config/DB');



const app = express();
dbConnection();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
//app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors())


app.use('*',
    cors()
);

app.get('/', async (req, res, next) => {
    res.send({message: 'Awesome it works 🐻'});
});

app.use('/items', require('./routes/ItemRoutes'));
app.use('/transactions', require('./routes/TransationRoutes'));
app.use('/vehicle', require('./routes/vehicleRoute'));
app.use('/vehicle-route', require('./routes/vehicleRouteRoutes'));
app.use('/sstg', require('./routes/sstgRoutes'));
app.use('/empReg', require('./routes/EmpRegRoutes'));
app.use('/empAttendance', require('./routes/EmpAttendanceRoutes'));
app.use('/purchaseTeaLeaves', require('./routes/PurchaseTeaLeavesRoutes'));
app.use('/sellingTeaLeaves', require('./routes/SellRoutes'));

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));