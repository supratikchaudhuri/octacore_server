import { Network, Alchemy } from 'alchemy-sdk';
import {ethers} from "ethers"
import Web3 from 'web3';
  

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const ALCHEMY_KEY = 'mF-Ff6CSnjQdcwTFElpycM4Jj2BtlF2-'
const NETWORK = 'https://eth-sepolia.g.alchemy.com/v2/mF-Ff6CSnjQdcwTFElpycM4Jj2BtlF2-'

const settings = {
  apiKey: ALCHEMY_KEY,
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log(latestBlock);

  const balance  = await alchemy.core.getBalance("0x05864Bda75c9BF2bc7b1275D743c792F2a723191", "latest")
  // console.log(balance);
  // console.log(ethers.utils.formatEther(balance._hex), " ETH");
  const wei = Web3.utils.hexToNumberString(balance._hex)
  console.log(Web3.utils.toWei(wei));

}


main()
