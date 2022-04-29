import { Interface } from '@ethersproject/abi'
import { ChainId } from 'bsc-testnet-dex-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  
  [ChainId.HARMONY_TESTNET]: '0x41991A4858EE8d57b537b9480B47e37C9576CF3b',//TODO: DO NOT SUPPORT V1 ON MUMBAI
  [ChainId.HARMONY]: "0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30"
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
