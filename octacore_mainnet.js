import octacore from 'octacore-test';
import axios from "axios"

const defaultClient = octacore.Core.instance;
const OCTACORE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiJGeUxtVUE2Z1BZcnlBZGU3YTlVOCIsInBsYW4iOiJmcmVlIiwicHJvamVjdElkIjoiWmhIOFR2YjFKNzFyTDhuSE5xNnQiLCJwcm9qZWN0TmFtZSI6IiIsImlhdCI6MTY4NDg0MjYxOH0.UxpNteZk9c3jxAV56uezzJhtokaPBUTRelvifK2-MNM'
const JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY

var instance = new octacore.Contracts();

const headers = {
  'Content-Type': 'application/json',
  'Authorization': OCTACORE_API_KEY
}

///////////////////////// Accounts //////////////////////////////

/*
 unit can have a default value,
 mention type of chains in docs
 */
var getBalance;
(getBalance = async function() {
  const res = await axios.post('https://api.octacore.io/getBalance', {
    address: '0xa12Db9F88f096f527fbE87a752c6ec16D501A25f',
    chains: ["eth"],
    unit: "wei"
  }, {
    headers: headers
  })
  console.log(res.data);
}) ()

/*
 fails if there is space after comma....should trim all white spaces in backend,
 or perhaps, accept an array
*/
var getBalanceMulti;
(getBalanceMulti = async function() {
  const res = await axios.post('https://api.octacore.io/getBalanceMulti', {
    address: '0xa12Db9F88f096f527fbE87a752c6ec16D501A25f,0x0DD683cDc58F814aD9098dc1BF59e48981d59A25,0x616A7D3807DeAfCCB3BC3676bf57815Ce225b16f',
    chains: ["eth"],
    unit: "eth"
  }, {
    headers: headers
  })
  // console.log(JSON.stringify(res.data));
  console.log(res.data.result.eth.balances);
})


var getERC20AssetsByAddress;
(getERC20AssetsByAddress = async function() {
  const res = await axios.post('https://api.octacore.io/getERC20AssetsByAddress', {
    address: '0x3fa7182B8e3A620374e54396516877B876c063EA',
    chains: ["eth"]
  }, {
    headers: headers
  })
  console.log(res.data.result.eth.assets);
}) 


var getERC721AssetsByAddress;
(getERC721AssetsByAddress = async function() {
  const res = await axios.post('https://api.octacore.io/getERC721AssetsByAddress', {
    address: '0xeb2Eb5C68156250C368914761bB8F1208d56AcD0',
    chains: ["eth"]
  }, {
    headers: headers
  })
  console.log(res.data.result.eth.assets);
}) 


var getERC1155AssetsByAddress;
(getERC1155AssetsByAddress = async function() {
  const res = await axios.post('https://api.octacore.io/getERC1155AssetsByAddress', {
    address: '0xeb2Eb5C68156250C368914761bB8F1208d56AcD0',
    chains: ["eth"]
  }, {
    headers: headers
  })
  console.log(res.data.result.eth.assets);
}) 


var getNFTAssetsByAddress;
(getNFTAssetsByAddress = async function() {
  const res = await axios.post('https://api.octacore.io/getNFTAssetsByAddress', {
    address: '0xeb2Eb5C68156250C368914761bB8F1208d56AcD0',
    chains: ["eth"]
  }, {
    headers: headers
  })
  console.log(res.data.result.eth.assets);
})



///////////////////////// Tansactions //////////////////////////////


// why failing???
var getTransactionByBlockHashAndIndex;
(getTransactionByBlockHashAndIndex = async function() {
  const res = await axios.post('https://api.octacore.io/getTransactionByBlockHashAndIndex', {
    hash: '0x718b3f06b276c114630376d2b88ad313974179f9d38675253b6ed3c8a92d67ad',
    chains: ["eth"],
    index: 0
  }, {
    headers: headers
  })
  console.log(res.status);
}) 


/*
incomplete data, some keys in result object don't make any sense
sender missing, 
alchemy is much comprehencive: https://docs.alchemy.com/docs/how-to-get-transaction-details
*/
var getTransactionDataByHash;
(getTransactionDataByHash = async function() {
  const res = await axios.post('https://api.octacore.io/getTransactionDataByHash', {
    chains: ["eth"],
    hash: '0xdcc2ec986674af8422ee15564dc825673540b4c26aaaea8fcff142bc10982bd2'
  }, {
    headers: headers
  })
  console.log(res.data);
})  ()





///////////////////////// ENS //////////////////////////////
const ensInstance = new octacore.ENS();

async function f1() {
  var input = new octacore.ModelsDomainReq("vitalik.eth");
  // var a = await ensInstance.ensResolve(input);
  var a = await ensInstance.ensResolve("vitalik.eth");
  console.log(JSON.stringify(a.body,null,2));
}
// f1()


///////////////////////// Blocks //////////////////////////////