const express = require("express");
const cors = require("cors");

const foodRoutes = require("./routes/food.routes");
const authRoutes = require("./routes/auth.routes");
const orderRoutes = require("./routes/order.routes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://surplr-frontend.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/auth", authRoutes);
app.use("/food", foodRoutes);
app.use("/order", orderRoutes);

module.exports = app;