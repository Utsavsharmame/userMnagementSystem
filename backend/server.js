const express = require('express');
const cors = require('cors');
require('dotenv').config();


const userRoutes = require('./routes/userRoutes');

const app = express();
 const PORT = process.env.PORT || 5000;

 // MIDDLEWARE
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


 // ROUTES
 app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'UMS IS RUNNING',
        endpoints: {
            'POST /users': 'Add a new user',
            'GET /users': 'Get all users',
            'GET /users/:id': 'Get user by id',
            'PUT /users/:id': 'Update user',
            'DELETE /users/:id': 'Delete user'
        }
    });
});

// if not found then
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});





 // server start
 app.listen(PORT, () => {
     console.log(`server is running on  http://localhost:${PORT}`);

 });




