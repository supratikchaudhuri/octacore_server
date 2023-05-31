const axios = require("axios");

const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
const octacore = require('octacore-test');
const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
var instance = new octacore.ENS();

exports.resolveENS = async (req, res) => {
  try {
    const domain = req.query.domain;
    const input = new octacore.ModelsDomainReq(domain);
    const response =await instance.ensResolve(input);
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err)
  }
}

exports.reverseResolveENS = async (req, res) => {
  try {
    const address = req.query.address;
    const input = new octacore.ModelsAddressReq(address);
    const response = await instance.ensReverseResolve(input);
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err)
  }
}