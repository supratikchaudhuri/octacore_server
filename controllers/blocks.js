const axios = require("axios");

const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
const octacore = require('octacore-test');
const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
var instance = new octacore.Blocks();

exports.getAllTxnByBlockHash = async (req, res) => {
  try {
    const blockHash = req.query.blockHash;
    const input = new octacore.ModelsHash(blockHash, ["eth"]); 
    const response = await instance.getAllTransactionsByBlockHash(input);
  
    res.status(200).json(response.body)

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getAllTxnByBlockNo = async (req, res) => {
  try {
    const blockNo = req.query.blockNo;
    const input = new octacore.ModelsBlockNumber(parseInt(blockNo), ["eth"]); 
    const response = await instance.getAllTransactionsByBlockNumber(input);

    res.status(200).json(response.body)

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getBlockDataByHash = async (req, res) => {
  try {
    const blockHash = req.query.blockHash;
    const input = new octacore.ModelsHash(blockHash, ["eth"]); 
    const response = await instance.getBlockDataByHash(input);

    res.status(200).json(response.body)

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getBlockDataByBlockNo = async (req, res) => {
  try {
    const blockNo = req.query.blockNo;
    const input = new octacore.ModelsBlockNumber(parseInt(blockNo), ["eth"]); 
    const response = await instance.getBlockDataByNumber(input);

    res.status(200).json(response.body)

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getBlockHeaderByBlockHash = async (req, res) => {
  try {
    const blockHash = req.query.blockHash;
    const input = new octacore.ModelsHash(blockHash,["eth"]);
    const response = await instance.getBlockHeaderByHash( input);
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getBlockHeaderByBlockNo = async (req, res) => {
  try {
    const blockNo = req.query.blockNo;
    const input = new octacore.ModelsBlockNumber(parseInt(blockNo),["eth"]);
    const response = await instance.getBlockHeaderByNumber( input);
    res.status(200).json(response.body);
    
  } catch (err) {
    res.status(503).json(err);
  }
}

