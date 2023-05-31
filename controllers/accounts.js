const axios = require("axios");

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
const octacore = require('octacore-test');
const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
var instance = new octacore.Accounts();

const headers = {
  'Content-Type': 'application/json',
  'Authorization': OCTACORE_API_KEY
}


exports.getEthPrice = async (req, res) =>   {
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      chain : EvmChain.ETHEREUM
    });

    res.status(200).json(response)

  } catch (err) {
    console.log(err);
    res.status(403).json(err)
  }
}

exports.getBalance = async (req, res) => {
  try {
    const address = req.query.address;
    const input = new octacore.ModelsAddressBalanceReq(address, ["eth","polygon"],"wei");
    const response = await instance.getBalance(input);
    
    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getPendingBalanceAt = async (req, res) => {
  try {
    const address = req.query.address;
    const input = new octacore.ModelsAddressReq(address,["eth","polygon"]);
    const response = await instance.getPendingBalanceAt(input);

    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getAllAssetsByAddress = async (req, res) => {
  try { 
    const address = req.query.address;
    const input = new octacore.ModelsAddressReq(address,["eth"]);
    const response = await instance.getAllAssetsByAddress(input);

    res.status(200).json(response.body);

  } catch (err) {
    res.status(503).json(err);
  }
}

exports.getNftAssets = async (req, res) => {
  try {
    const address = req.query.address;
    const input = new octacore.ModelsAddressReq(address,["eth"]);
    const ERC721Assets = await instance.getERC721AssetsByAddress(input);
    const ERC1155Assets = await instance.getERC1155AssetsByAddress(input);

    res.status(200).json({'ERC721Assets': ERC721Assets.body, 'ERC1155Assets': ERC1155Assets.body});
  
  } catch (err) {
    res.status(503).json(err);
  }
}

