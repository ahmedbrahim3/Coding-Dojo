const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")
const port = process.env.port;


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./config/mongoose.config");
require("../server/routes/produt.routes")(app)


app.listen(port, () => {
    console.log("🚀🚀 Listenning to port " + port);
  });