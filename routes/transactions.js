const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactions");

router.get("/getTransactionData", transactionsController.getTransactionData);
router.get("/getTransactionByBlockHashAndIndex", transactionsController.getTransactionByBlockHashAndIndex);
router.get("/getTransactionByBlockNumberAndIndex", transactionsController.getTransactionByBlockNumberAndIndex);


module.exports = router