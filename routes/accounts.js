const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");

router.get("/getEthPrice", accountsController.getEthPrice);
router.get("/getBalance", accountsController.getBalance);
router.get("/getPendingBalanceAt", accountsController.getPendingBalanceAt);
router.get("/getAllAssetsByAddress/", accountsController.getAllAssetsByAddress);
router.get("/getNftAssets/", accountsController.getNftAssets);


module.exports = router;