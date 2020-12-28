
# FinNexus Integrates Chainlink Price Feeds Live on Ethereum Mainnet to Power Decentralized Options

Chainlink Brings Real-time Pricing Data to the Forthcoming FinNexus DeFi Options Platform

We are excited to announce that FinNexus has integrated Chainlink’s BTC/USD, ETH/USD and FNX/USD [Price Feeds](https://feeds.chain.link/) live on mainnet to power our new FinNexus Protocol for Options (FPO) platform. We are currently in the WildNet phase of our Multi-Asset Single Pool (MASP) DeFi options platform, but will soon go live on mainnet.

![](https://cdn-images-1.medium.com/max/3200/0*OkDbFjg1VSNr0FeG)

Chainlink’s price oracles will ensure FPO can price, trade, and settle options contracts, as well as properly manage the liquidity pool, in a fully decentralized manner and in accordance with the fair market prices of the utilized assets. We also plan to integrate Chainlink’s upcoming BTC and ETH Implied Volatility (IV) data feeds to automate pricing options contracts using the Black-Scholes Options Pricing Model.

## The Need for Price Oracles on FPO

[FinNexus Protocol for Options (FPO) v1.0](https://www.docs.finnexus.io/options/v1.0/) is a decentralized options protocol with an innovative pooled liquidity model. With the [Multi-Asset Single-Pool (MASP) model](https://www.docs.finnexus.io/options/v1.0/#v10-masp-pool-overview), all the liquidity is pooled together in a monolithic pool, acting as the sole counterparty for writing, trading, and exercising options. Accurate and scalable price feeds are essential for FPO’s core functions, including trading and exercising options, interacting with the liquidity pools, and making distributions.

![](https://cdn-images-1.medium.com/max/3200/0*oTl3-WKBSxf6td9f)

## Why is Accurate Data Crucial for FPO?

1. **The operation and security of the liquidity pool
**On Ethereum, the FPO liquidity pool consists of three assets — ETH, USDC, and FNX — and is measured as the combined USD value of those assets contributed to the liquidity pool. USD value is the key parameter that determines the number of pool tokens a user can get for contributing liquidity to the pool. It also determines the amount of rewards given to liquidity providers. Therefore, the price feed is a vital element of protocol security since the price feed sets the required collateral for options writers and triggers liquidation events.

1. **Pricing options
**Since FinNexus uses the Black-Scholes Options Pricing Model in the FPO smart contracts, it relies on accurate and timely spot prices for BTC and ETH. In the near future, Chainlink is launching decentralized Implied Volatility (IV) value feeds, which we will integrate. Until then, DeFi options platforms must manually input the IV data into their smart contracts, as IV is the most essential component of pricing options.

1. **Trading options
**Options are priced in USD, and users may buy or sell them using ETH, USDC, or FNX. As such, our protocol needs accurate and fresh market data to price options correctly.

1. **Settling options
**In FPO, options are American type, and holders may choose to exercise options before maturity. Since FPO options are cash-settled, no physical transfer of underlying assets is needed, and settlement occurs using the difference in USD value. Settlement calculations rely on accurate and timely on-chain price oracles.

We selected Chainlink because it supplies our options contracts with high-quality price data sourced from premium off-chain data aggregators, ensuring our price feeds have market coverage across all trading environments. They also employ decentralization at the oracle and data source level, removing any single point of failure in the sourcing and delivery of data to our contracts. Our users can independently verify the performance of these price feeds via transparent visualizations of the decentralized oracles powering them, further increasing trust in FPO’s operations.

![*Visualization showing Chainlink’s ETH/USD Price Feed with transparent oracle performance metrics*](https://cdn-images-1.medium.com/max/4978/1*dFh7m_G814kpqC-bIOe7BA.png)**Visualization showing Chainlink’s ETH/USD Price Feed with transparent oracle performance metrics**

## Implied Volatility Data for Smart Contract Automation

In addition to the most accurate and reliable price oracles in blockchain, Chainlink also supports generalized oracles to make a wide variety of off-chain information available on-chain, such as weather prices, events, security data, and more. We are working with Chainlink to bring IV data feeds to FPO using this generalized data oracle framework.

[Implied volatility](https://www.investopedia.com/terms/i/iv.asp#:~:text=Implied%20volatility%20is%20the%20market's,higher%20premiums%20and%20vice%20versa.) is a “metric that captures the market’s view of the likelihood of changes in a given security’s price.” Implied volatility data is crucial for setting the right price for options contracts (as well as many other assets), thus we look forward to an upcoming integration of Chainlink’s IV oracles to create a fully decentralized options trading experience.

FinNexus will likely be the first project in the DeFi industry to use on-chain IV data for options pricing!

“We are thrilled to launch FPO and introduce the DeFi ecosystem to an improved options market with deeper, more sophisticated liquidity capabilities, “ said FinNexus CEO and Founder Boris Yang. “By integrating Chainlink Price Feeds and soon its IV data, we’re able to provide a fully decentralized options trading experience without sacrificing on data quality, creating a full feature platform where anyone can write, trade and execute options.”

![](https://cdn-images-1.medium.com/max/2000/1*QIMPaYup85mYwINW3kOJWQ.png)

## About Chainlink

If you’re a developer and want to connect your dApp to Chainlink Price Reference Data quickly, visit the [developer documentation](https://docs.chain.link/) and join the technical discussion in [Discord](https://discordapp.com/invite/aSK4zew). If you want to schedule a call to discuss the integration more in-depth, reach out [here](https://chainlink.typeform.com/to/gEwrPO).

Chainlink is a general-purpose framework for building and running decentralized oracle networks that give your smart contract access to secure and reliable data inputs and outputs. Use Chainlink to connect to data providers, web APIs, enterprise systems, cloud providers, IoT devices, payment systems, other blockchains, and much more.

[Website](https://chain.link/) | [Twitter](https://twitter.com/chainlink) |[ Reddit](https://www.reddit.com/r/Chainlink/) | [YouTube](https://www.youtube.com/channel/UCnjkrlqaWEBSnKZQ71gdyFA) | [Telegram](https://t.me/chainlinkofficial) | [Events](https://blog.chain.link/tag/events/) | [GitHub](https://github.com/smartcontractkit/chainlink) | [Price Feeds](https://feeds.chain.link/) | [DeFi](https://defi.chain.link/)

## About FinNexus

[FinNexus](http://finnexus.io/) is building a suite of open finance protocol clusters that will power hybrid marketplaces trading both decentralized and traditional financial products. The headline product released is a fully decentralized options model with pooled liquidity, live on both Ethereum and Wanchain.

[***Newsletter](https://mailchi.mp/9c15712d2bbf/finnexus-newsletter) | [Whitepaper](https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_en.pdf) | [Telegram](https://t.me/FinNexusOfficial) | [Twitter](https://twitter.com/fin_nexus) | [Linkedin](https://www.linkedin.com/company/finnexus) | [Facebook](https://www.facebook.com/FinNexus)| [Discord](https://discord.com/invite/bCDMHN7)***
