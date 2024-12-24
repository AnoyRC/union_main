# Delegator's _Union_

Unite with other delegators to maximize your voting impact and influence decisions.

![Made-With-React](https://img.shields.io/badge/MADE%20WITH-NEXT-000000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=nextdotjs)
![Made-With-Tailwind](https://img.shields.io/badge/MADE%20WITH-TAILWIND-06B6D4.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=tailwindcss)
![Made-With-Javascript](https://img.shields.io/badge/MADE%20WITH-Javascript-ffd000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=javascript)
![Made-With-NEOZ](https://img.shields.io/badge/Deployed%20on-NEOX-00ffae.svg?colorA=222222&style=for-the-badge&logoWidth=14)

> **Union** is a platform that allows delegators to unite and maximize their voting impact. Delegators delegate their voting power to a union. This union then votes on behalf of the delegators, based on the majority vote of the delegators.

## Types of Unions

> 1.  **Traditional Union**: Classic one-token-one-vote system with straightforward majority rules.
> 2.  **Equal Union**: Democratic one-person-one-vote system regardless of token holdings.
> 3.  **Conviction Union**: Time-weighted voting system that rewards long-term commitment.
> 4.  **NFT Union**: Unique voting power based on NFT holdings and attributes.
> 5.  **Quadratic Union**: Rank-choice voting (allowing one to express preference of certain choices over others).

This is the Repo for _[getUnion.tech](https://getUnion.tech/)_ made during NEOX GRIND Hackathon.

## Deployments

- **NEO X Mainnet**

  - Union Proxy Factory - [0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016](https://xexplorer.neo.org/address/0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016)
  - Conviction Union - [0x40C92d2E370b3d3944fDd90c922a407F02D286d1](https://xexplorer.neo.org/address/0x40C92d2E370b3d3944fDd90c922a407F02D286d1)
  - Equal Union - [0x44950f083691828A07c17d2A927B435e8B272F6D](https://xexplorer.neo.org/address/0x44950f083691828A07c17d2A927B435e8B272F6D)
  - NFT Union - [0x1275917daAE6389C61c7B1E8199724D0b46Ed10f](https://xexplorer.neo.org/address/0x1275917daAE6389C61c7B1E8199724D0b46Ed10f)
  - Traditional Union - [0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a](https://xexplorer.neo.org/address/0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a)
  - QuadraticUnion - [0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB](https://xexplorer.neo.org/address/0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB)

#

- **NEO X Testnet**

  - Union Proxy Factory - [0x614ae60954f0AEdd172141A9C52052a8B422DEfd](https://xt4scan.ngd.network/address/0x614ae60954f0AEdd172141A9C52052a8B422DEfd)
  - Conviction Union - [0x44950f083691828A07c17d2A927B435e8B272F6D](https://xt4scan.ngd.network/address/0x44950f083691828A07c17d2A927B435e8B272F6D)
  - Equal Union - [0x1275917daAE6389C61c7B1E8199724D0b46Ed10f](https://xt4scan.ngd.network/address/0x1275917daAE6389C61c7B1E8199724D0b46Ed10f)
  - NFT Union - [0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a](https://xt4scan.ngd.network/address/0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a)
  - Traditional Union - [0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB](https://xt4scan.ngd.network/address/0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB)
  - QuadraticUnion - [0xE34906Eda6Cf2cafFa1d567523C7954fDf9E80E0](https://xt4scan.ngd.network/address/0xE34906Eda6Cf2cafFa1d567523C7954fDf9E80E0)

#

> **Pre-requisites:**
>
> - Setup Node.js v18+ (recommended via [nvm](https://github.com/nvm-sh/nvm) with `nvm install 18`)
> - Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
> - Clone this repository

```bash
# Install dependencies
npm install

# fill environments
cp .env.local.example .env.local
```

## Development

```bash
# Start development server
npm run dev

# Build production frontend & start server
npm run build
npm run start
```
