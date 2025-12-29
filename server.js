const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy product data
let products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Jeans", price: 999 }
];

let cart = [];

// Get products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add to cart
app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart", cart });
});

// Place order
app.post("/order", (req, res) => {
  cart = [];
  res.json({ message: "Order placed successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});