const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/routes");
const DB_CONNECT = require("./config/mongodb");
const colors = require("colors");

const app = express();

// Load env config
dotenv.config({ path: "config/config.env" });

// View engine
app.set("view engine", "ejs");

// Middeware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router
app.use("/", router);

// Connect to DB
DB_CONNECT();

// Initialize server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`.cyan.bold));
