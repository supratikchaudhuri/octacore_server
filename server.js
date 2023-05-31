require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000

const Moralis = require("moralis").default;
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

const accountRoutes = require("./routes/accounts")
const transactionRoutes = require("./routes/transactions")
const ensRoutes = require("./routes/ens")

// app.use(express.json()); //parsing http data
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);
app.use("/ens", ensRoutes);


app.listen(PORT, async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY
  });
  
  console.log(`listening on port ${PORT}`)
});