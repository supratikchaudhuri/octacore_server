const express = require("express");
const router = express.Router();
const blocksController = require("../controllers/blocks");

router.get('/getAllTxnByBlockHash', blocksController.getAllTxnByBlockHash)
router.get('/getAllTxnByBlockNo', blocksController.getAllTxnByBlockNo)
router.get('/getBlockDataByHash', blocksController.getBlockDataByHash)
router.get('/getBlockDataByBlockNo', blocksController.getBlockDataByBlockNo)
router.get('/getBlockHeaderByBlockHash', blocksController.getBlockHeaderByBlockHash)
router.get('/getBlockHeaderByBlockNo', blocksController.getBlockHeaderByBlockNo)

module.exports = router;