import { defineChain } from '../../utils/chain/defineChain.js'
import { formatters } from '../opStack/formatters.js'

const sourceId = 1 // mainnet

export const pgn = /*#__PURE__*/ defineChain({
  id: 424,
  network: 'pgn',
  name: 'PGN',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.publicgoods.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PGN Explorer',
      url: 'https://explorer.publicgoods.network',
    },
    blocksout: {
      name: 'PGN Explorer',
      url: 'https://explorer.publicgoods.network',
    },
  },
  contracts: {
    l2OutputOracle: {
      [sourceId]: {
        address: '0x9E6204F750cD866b299594e2aC9eA824E2e5f95c',
      },
    },
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 3380209,
    },
    portal: {
      [sourceId]: {
        address: '0xb26Fd985c5959bBB382BAFdD0b879E149e48116c',
      },
    },
  },
  formatters,
  sourceId,
})