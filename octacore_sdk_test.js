import octacore from 'octacore-test';
import axios from "axios"

const defaultClient = octacore.Core.instance;
const OCTACORE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiJGeUxtVUE2Z1BZcnlBZGU3YTlVOCIsInBsYW4iOiJmcmVlIiwicHJvamVjdElkIjoiWmhIOFR2YjFKNzFyTDhuSE5xNnQiLCJwcm9qZWN0TmFtZSI6IiIsImlhdCI6MTY4NDg0MjYxOH0.UxpNteZk9c3jxAV56uezzJhtokaPBUTRelvifK2-MNM'
const JWT = defaultClient.authentications['JWT'];
JWT.apiKey = OCTACORE_API_KEY

var instance = new octacore.Accounts();

async function getBalance() {
  var input = new octacore.ModelsAddressBalanceReq("0xfbfe37e74c3ad7170f5013b2722fbb31b616ec17",["eth","polygon"],"wei");
  var a =await instance.getBalance(input);
  console.log(JSON.stringify(a.body,null,2));
}
getBalance()