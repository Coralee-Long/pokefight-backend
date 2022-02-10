const express = require("express");
const pokeRouter = require("./routes/pokeRouter");
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
//use cors to communicate between front-end and back-end
const cors = require("cors");
app.use(cors());
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");


//it will convert response to json
app.use(express.json());

//used while we PUT or POST
app.use(
  express.urlencoded({
    extended: false,
  })
);

mongoose.connect(process.env.MONGO_DB)


app.use("/pokemon", pokeRouter);

app.use("/users", userRouter)

app.use("/", authRouter)

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
