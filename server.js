const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'https://localhost:8081'
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

// routers
const router = require('./routes/productRouter.js');
app.use('/api/product', router)

// //testing api
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello From API'
//     })
// });

// port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})