import { ChainId } from 'bsc-testnet-dex-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
 
  [ChainId.HARMONY_TESTNET]: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
  [ChainId.HARMONY]: "0x937D9A5a7948e1E5f5F232841d27C9AAE068A163"
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
