const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;
// === MIDDLEWARE ===
app.use(express.json(), express.urlencoded({ extended: true }));

// grab the config
require("./config/mongoose.config");
// grab the routes
require("./routes/joke.routes")(app);

app.listen(port, () => {
  console.log("🚀🚀 Listenning to port " + port);
});
