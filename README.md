# Tweether

"A decentralised twitter clone built on Ethereum" based on this [tutorial](https://www.ludu.co/course/ethereum/what-is-ethereum)

## Requirements

- Node.js 16.13.0
- Yarn 1.22.17
- [Truffle 5.4.28](https://github.com/trufflesuite/truffle)
- [Ganache CLI 6.12.2](https://github.com/trufflesuite/ganache)
- Metamask account

## Development

Install dependencies

```shell
yarn
```

Prepare environment then update the `METAMASK_ADDRESS` value

```shell
cp .env.example .env
```

Open the 2nd CLI tab to start the ganache service to provide balance with amount 10 accounts x 100 eth on localhost, then keep this tab opened

```shell
ganache-cli
```

Back to the 1st CLI tab, on your metamask switch network to `Localhost 8545`, then fund it with some balance from ganache

```shell
yarn fund:metamask
```

Deploy contracts to the `Localhost 8545` network

```shell
yarn migrate
```

Serve with hot reload at `http://localhost:3000`

```shell
yarn dev
```
