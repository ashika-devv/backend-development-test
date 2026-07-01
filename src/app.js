const express = require("express");

const playerRoutes = require("./routes/player.routes");

const app = express();

app.use(express.json());

// Register routes
app.use("/", playerRoutes);

module.exports = app;