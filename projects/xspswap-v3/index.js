const { uniV3Export } = require('../helper/uniswapV3')
const { staking } = require('../helper/staking')
const { mergeExports } = require("../helper/utils");
const factory = '0x30F317A9EC0f0D06d5de0f8D248Ec3506b7E4a8A'
const stakingAddress = '0x326928476f877dcca13dd7d43ce3b0bdb4dcf6f2'

const uniV3TVL = uniV3Export({
  xdc: { factory, fromBlock: 59782067, methodology: 'TVL accounts for the liquidity on all AMM pools taken from the factory contract', },
})

const stakingTokens = [
  '0x951857744785E80e2De051c32EE7b25f9c458C42', // wxdc
  '0x36726235dAdbdb4658D33E62a249dCA7c4B2bC68', // xsp
  '0xD4B5f10D61916Bd6E0860144a91Ac658dE8a1437', // xusdt
  '0x49d3f7543335cf38Fa10889CCFF10207e22110B5', // fxd
  '0x0E11710AAd67E7427CfbC12c353284C2e335F62c', // prnt
  '0xFf7412Ea7C8445C46a8254dFB557Ac1E48094391', // pli
  '0x5D5f074837f5d4618B3916ba74De1Bf9662a3fEd', // srx
]
const stakingTVL = {
  xdc: {
    tvl: () => ({}),
    staking: staking(stakingAddress, stakingTokens, 'xdc', null, 0),
  }
}


module.exports = mergeExports([stakingTVL, uniV3TVL ]);