const axios = require("axios");

const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
const octacore = require('octacore-test');
const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
var instance = new octacore.Contracts();

exports.getTransferEvents = async (req, res) => {
  try {
    const input = new octacore.ModelsTxReq(
      req.query.address,
      req.query.startBlock || 1,
      req.query.endBlock || 5,
      ["eth"]
    );

    const response = await instance.getTransferEventsByContractAdress(input);
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getApprovalEvents = async (req, res) => {
  try {
    const input = new octacore.ModelsTxReq(
      req.query.address,
      req.query.startBlock || 1,
      req.query.endBlock || 5,
      ["eth"]
    );

    const response = await instance.getTransferEventsByContractAdress(input);
    res.status(200).json(response.body);
  } catch (err) {
    res.status(503).json(err);
  }
}