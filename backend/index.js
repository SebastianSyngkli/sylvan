const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Items = require('./routes/item');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const  verify = require('./routes/verify')
const reset = require('./routes/reset');
const forget = require('./routes/forgot')
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/items', Items);
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/verify-email', verify)
app.use('/reset', reset)
app.use('/forgot',forget)

try {
    console.log("connection is successful");
    const uri = process.env.DB_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            const port = process.env.PORT || 5000;
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        })
        .catch(err => {
            console.error("Error connecting to MongoDB", err);
        });
} catch (err) {
    console.log("Error: Something went wrong", err);
}