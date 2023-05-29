import { Network, Alchemy } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const ALCHEMY_KEY = '7K026mZVMbBDKLoE6dnZa9zA4X1Llc4O'
const NETWORK = 'https://eth-mainnet.g.alchemy.com/v2/7K026mZVMbBDKLoE6dnZa9zA4X1Llc4O'

const settings = {
  apiKey: ALCHEMY_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getTxn() {
  const address = '0x718b3f06b276c114630376d2b88ad313974179f9d38675253b6ed3c8a92d67ad'
  const res = await alchemy.core
  .getTransactionReceipt(
    "0x68ea69fd8b5dfa589a7a983c324ab153a33356320207885a9bba84425598dcaa" 
  )
  console.log(res);
}
getTxn()
