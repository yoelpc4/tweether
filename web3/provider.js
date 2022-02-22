import Web3 from 'web3'
import contract from '@truffle/contract'

const getProvider = () => Web3.givenProvider || 'ws://localhost:8545'

export const eth = new Web3(getProvider()).eth

export const getInstance = (artifact) => {
  const compiledContract = contract(artifact)

  compiledContract.setProvider(getProvider())

  return compiledContract.deployed()
}
