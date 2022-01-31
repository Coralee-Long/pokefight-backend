const express = require("express");
const pokeRouter = require("./routes/pokeRouter");
const app = express();
const PORT = process.env.PORT || 5000;

//it will convert response to json
app.use(express.json());

//used while we PUT or POST
app.use(
  express.urlencoded({
    extended: false,
  })
);

//use cors to communicate between front-end and back-end
const cors = require("cors");
app.use(cors());

app.use("/pokemon", pokeRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
