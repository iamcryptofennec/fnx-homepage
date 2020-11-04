---
title: FinNexus DeFi Options Mainnet November 4th on Ethereum!
author: Noah Maizels
date: '2020-11-02'
---

# FinNexus DeFi Options Mainnet Goes Live November 4th on Ethereum — Mark the Date!

We highlight important updates before the FinNexus Protocol for Options (FPO) v1.0 opens to the public on the Ethereum mainnet.

The official version of the FinNexus Protocol for Options (FPO) v1.0 hits the Ethereum mainnet on November 4th, 2020, followed shortly by its launch on the Wanchain mainnet. Both versions will be accessible at ***[options.finnexus.io](http://options.finnexus.io).*** 
It will be the first DApp in the Wanchain ecosystem to deploy the unique “Dual DApp” strategy where, if you have both Wanmask and Metamask installed in your browser, you can interact with both blockchains from the same web page at the same time!
> # Bookmark the [FPO v1.0 official URL](http://options.finnexus.io) now, don’t get scammed!

To use FPO v1.0, you must first move your tokens from FPO WildNet to FPO v1.0. We will release complete instructions about how to do so in the next few days, follow us on [Twitter ](https://twitter.com/fin_nexus)to make sure you don’t miss it.
> **Notice: FPO v1.0 contracts have not yet been audited. Your funds may be at risk. NEVER provide funds that you can’t afford to lose.**

## Change #1: Single, Multi Collateral Pool → Multiple, Single Collateral Pools

The WildNet implementation of FPO uses a single [MASP](https://medium.com/finnexus/fpo-v1-0-will-support-multiple-assets-for-providing-liquidity-b2a88e2617b0) liquidity pool which drew from multiple different collateral types. We have decided for a variety of reasons that it is better not to combine multiple collateral types into a single collateral pool, but rather to have individual MASP pools for each collateral type. Thus, FPO v1.0 will be **converting from a single MASP pool with multiple collateral types to two MASP pools for single asset collateral — USDC and FNX.** These two single collateral pools allow the writing of options for any underlying asset, exactly like the Wildnet multi collateral pools, The only difference is that each pool allows for the contribution of only a single collateral type, that is USDC and FNX respectively.

![Single, Multi Collateral MASP Pool → Multiple, Single Collateral MASP Pools](https://cdn-images-1.medium.com/max/2800/1*YDq91cp1QME4lo7NAYCmyg.png)*Single, Multi Collateral MASP Pool → Multiple, Single Collateral MASP Pools*

### **Reasons for changing to single asset collateral pools:**

1. **It allows users to better control risk —** For each MASP pool, users of the pool are exposed to the volatility risks of the collateral used to create the pool (which included ETH, USDC, & FNX in the previous model). With the new model, each pool has a single collateral type, which allows for users with low risk tolerance to choose low volatility collateral pools like the USDC pool.

1. **To simplify the liquidity providing process —** With the new model, the type of collateral used to underwrite the options written from the liquidity pool and the asset withdrawn from the pool will be the same. Thus, liquidity providers can provide whatever asset they prefer (USDC or FNX) and know that they will receive that same asset, plus or minus the gains from providing liquidity, when they withdraw.

1. **Revamped benefits for FNX token holders —** An individual pool exclusively for FNX collateral is necessary for the FNX ecosystem. It will offer unique opportunities available only for FNX holders to earn returns using their FNX tokens, promoting the long term value of the token.

### NOTES ON NEW MODEL:

1. **Same basic model, but with single collateral pools —** The basic [MASP mechanism](https://medium.com/finnexus/fpo-v1-0-the-universal-options-protocol-is-a-game-changer-fc11f30c4bb4) remains the same, users may still generate multiple synthetic options backed by collateral in the MASP pool, the ***ONLY*** difference is that they now can choose amongst multiple MASP pools, each with a single collateral type, rather than a single MASP pool with multiple collateral types.

1. **Benefits of the USDC MASP Pool —** The USDC MASP pool takes advantage of USDC’s relatively lower volatility. Due to USDC’s low volatility, the USDC MASP pool’s [MCR](https://www.docs.finnexus.io/terminology/#minimum-collateralization-ratio-mcr) may be set lower than that of a more volatile asset, Which allows for a larger amount of options to be issued with a relatively lower value of collateral.

1. **Benefits of the FNX MASP Pool —** While the FNX pool will generate a lower amount of options than the less volatile USDC pool, it will feature a higher level of rewards for pool users. Higher token lock up will also reduce FNX supply, putting upwards pressure on the token price.

![](https://cdn-images-1.medium.com/max/3508/0*R9KS5j7LeZGaKBjf.png)

## Change #2: More Underlying Assets (LINK, MKR, SNX, & more to come)

![](https://cdn-images-1.medium.com/max/3508/1*nbxA2u63yLCnHznQO1Ynfw.png)

FPO WildNet offered two underlying assets, BTC and ETH. Users could buy BTC and ETH puts and calls, with different strike prices and expirations according to their needs.

Since FPO is a [universal ](https://medium.com/finnexus/fpo-v1-0-the-universal-options-protocol-is-a-game-changer-fc11f30c4bb4)options protocol, it is able to support a theoretically unlimited variety of underlying assets, as long as it has access to an on-chain price feed for that asset.

![](https://cdn-images-1.medium.com/max/6912/1*GOrRP3VpJKhbCnrkSsUozg.jpeg)

With the help of [Chainlink](https://medium.com/finnexus/finnexus-integrates-chainlink-price-feeds-live-on-ethereum-mainnet-to-power-decentralized-options-1d3aa8c657ba), LINK, MKR, SNX will be available to FPO v1.0 users on the Ethereum mainnet.

## Change #3: Sell-backs Disabled

In the FPO WildNet, option holders could choose to sell back options to the pool at the price derived from the pricing mechanism in the smart contract. However, after testing for a month on the WildNet, we figured that the sell-back mechanism might provide unfair arbitraging opportunities that were unfavorable to the liquidity pool.

[Extrinsic value](https://www.investopedia.com/terms/e/extrinsicvalue.asp#:~:text=Extrinsic%20value%20is%20the%20difference,in%20volatility%20in%20the%20market.) is also known as “time value” because the time left until the option contract expires is one of the primary factors affecting the option premium. Under normal circumstances, an option contract loses value as it approaches its expiration date because there is less time for the underlying assets’ prices to move favorably.

As the sell-back price is derived from the [B-S model](https://www.investopedia.com/terms/b/blackscholes.asp), it is inclusive of the time value (extrinsic value) of the options. While the exercising of options before expiration means the holders give up the remaining time value and realize the gains. However, unlike selling to other buyers in order books, when selling back to the pool, the pool acts as the sole counterparty, closes its position in a passive manner, and the options sold back cease to function. There should be no ‘time value’ left for these options sold back to the pool. So it is unfair to pool liquidity providers to include the time value in pricing. In other words, it is always more profitable for option holders to sell rather than exercise.

Therefore, the option sell-back function will be disabled in FPO v1.0, but option holders may still have the choice to exercise the options at their own discretion before expiration, provided it passes the [1-hour chill time](https://medium.com/finnexus/designs-to-make-fpo-v1-0-safe-and-secure-afee6a729e1b).

## FPO v1.0 Token Incentives

![A comparison of the three options collateral pools soon to be available in FPO v1.0.](https://cdn-images-1.medium.com/max/3200/1*lMO3yj-DFtc7cxKbibcR3g.png)*A comparison of the three options collateral pools soon to be available in FPO v1.0.*

There will be 3 options collateral pools on FPO v1.0 live on both Ethereum and Wanchain. The 3 pools will work independently on-chain. The above FNX mining incentives on the Ethereum mainnet are expected to last for 30 days from 4th Nov. 2020. WAN mining incentives are only expected to last for 15 days after its launch, soon after the launch on Ethereum. Further incentives will be announced before the end of each period.

Note that the WildNet Mining incentives on Ethereum will end after FPO v1.0 is live on 4th Nov. 2020. Liquidity providers will have to withdraw their collateral from the Wildnet smart contract and re-stake their collateral into the FPO v1.0 smart contracts.

## Conclusion

We are especially excited to bring the FinNexus Protocol for Options to its first major “test in prod” phase. While we have every reason to believe our smart contracts are robust and complete, one never knows with these things until the stresses of everyday use come to bear. We know we are ready for FPO v1.0…the only question is whether or not the DeFi world is ready for FPO v1.0.

![](https://cdn-images-1.medium.com/max/2000/0*OLAoke1t-nCx1M1a.png)

## About FinNexus

[FinNexus](http://finnexus.io/) is pioneering a cross-chain DeFi protocol for writing options exposure for multiple assets from within a single collateral pool. This groundbreaking Multi-Asset Single Pool (MASP) methodology for decentralized peer-to-pool options platforms enables anyone anywhere to leverage or hedge their positions in a variety of cryptoassets. Currently live on Ethereum and Wanchain, FinNexus intends to bring its blockchain-agnostic FinNexus Protocol for Options (FPO) to Elrond and Kardiachain soon.

[***Newsletter](https://mailchi.mp/9c15712d2bbf/finnexus-newsletter) | [Whitepaper](https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_en.pdf) | [Telegram](https://t.me/FinNexusOfficial) | [Twitter](https://twitter.com/fin_nexus) | [Linkedin](https://www.linkedin.com/company/finnexus) | [Facebook](https://www.facebook.com/FinNexus)| [Discord](https://discord.com/invite/bCDMHN7)***]

![](https://cdn-images-1.medium.com/max/NaN/0*brQygQEAKzJtJ7My.png)
