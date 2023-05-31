export const axios = require("axios");

export const Moralis = require("moralis").default;
export const { EvmChain } = require("@moralisweb3/common-evm-utils");

export const OCTACORE_API_KEY = process.env.OCTACORE_API_KEY;
export const octacore = require('octacore-test');
export const defaultClient = octacore.Core.instance;
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY;
export const instance = new octacore.Accounts();

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': OCTACORE_API_KEY
}
