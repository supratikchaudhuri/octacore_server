const axios = require("axios");

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
const octacore = require('octacore-test');
const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
var instance = new octacore.Transactions();

const headers = {
  'Content-Type': 'application/json',
  'Authorization': OCTACORE_API_KEY
}

exports.getTransactionData = async (req, res) => {
  try {
    const hash = req.query.hash
    const input = new octacore.ModelsHash(hash, ["eth"]);
    const response = await instance.getTransactionDataByHash(input);

    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err)
  }
}

exports.getTransactionByBlockNumberAndIndex = async (req, res) => {
  try {
    const blockNo = parseInt(req.query.blockNo);
    const index = req.query.index;
    const input = new octacore.ModelsBlockNumberIndex(blockNo, parseInt(index) || 1, ["eth"]);
    const response = await instance.getTransactionByBlockNumberAndIndex(input);
    res.status(200).json(response.body);
  
  } catch (err) {
    console.log(err);
    res.status(503).json(err)
  }
}

exports.getTransactionByBlockHashAndIndex = async (req, res) => {
  try {
    const blockHash = req.query.blockHash;
    const index = req.query.index;
    const input = new octacore.ModelsHashIndex(blockHash, parseInt(index) || 1, ["eth"]); 
    const response = await instance.getTransactionByBlockHashAndIndex(input);
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}


