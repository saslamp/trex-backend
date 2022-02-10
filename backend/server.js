const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const userRoutes = require('./routes/userRoute');

const app = express();

let corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Trade Exchange API v1.0-alpha",
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));