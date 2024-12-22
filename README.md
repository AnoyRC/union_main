# Delegator's _Union_

Unite with other delegators to maximize your voting impact and influence decisions.

![Made-With-React](https://img.shields.io/badge/MADE%20WITH-NEXT-000000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=nextdotjs)
![Made-With-Tailwind](https://img.shields.io/badge/MADE%20WITH-TAILWIND-06B6D4.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=tailwindcss)
![Made-With-Javascript](https://img.shields.io/badge/MADE%20WITH-Javascript-ffd000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=javascript)
![Made-With-NEO](https://img.shields.io/badge/Deployed%20on-NEO-00ffae.svg?colorA=222222&style=for-the-badge&logoWidth=14)

> **Union** is a platform that allows delegators to unite and maximize their voting impact. Delegators delegate their voting power to a union. This union then votes on behalf of the delegators, based on the majority vote of the delegators.

## Types of Unions

> 1.  **Traditional Union**: Classic one-token-one-vote system with straightforward majority rules.
> 2.  **Equal Union**: Democratic one-person-one-vote system regardless of token holdings.
> 3.  **Conviction Union**: Time-weighted voting system that rewards long-term commitment.
> 4.  **NFT Union**: Unique voting power based on NFT holdings and attributes.
> 5.  **Quadratic Union**: Rank-choice voting (allowing one to express preference of certain choices over others).

This is the Repo for _[getUnion.xyz](https://getUnion.xyz/)_.

## Deployments

- **Flare Testnet**

  - Union Proxy Factory - [0x62CB235Cf18Af7b62B918d93DA89212bc89daFdc](https://coston2-explorer.flare.network/address/0x62CB235Cf18Af7b62B918d93DA89212bc89daFdc)
  - Conviction Union - [0x17DDF0820846565B5CF237E80Ad3D5A2bE3CCe3D](https://coston2-explorer.flare.network/address/0x17DDF0820846565B5CF237E80Ad3D5A2bE3CCe3D)
  - Equal Union - [0x0bB84e676150E4721c9Eb21E6863fBD40A8898E3](https://coston2-explorer.flare.network/address/0x0bB84e676150E4721c9Eb21E6863fBD40A8898E3)
  - NFT Union - [0xFA2d0B8DE8c95c49615eAd2CAb22D26CB9998445](https://coston2-explorer.flare.network/address/0xFA2d0B8DE8c95c49615eAd2CAb22D26CB9998445)
  - Traditional Union - [0x51f33358d4f735541068df71ff73Ad5dBEd67ad6](https://coston2-explorer.flare.network/address/0x51f33358d4f735541068df71ff73Ad5dBEd67ad6)
  - QuadraticUnion - [0xDe45479eB204834f3Db76161bB8DE48a5A3B3D32](https://coston2-explorer.flare.network/address/0xDe45479eB204834f3Db76161bB8DE48a5A3B3D32)
  - FlareUnion - [0xC1AEA53f0c1EF35219A90Bec9495D3561a4B5951](https://coston2-explorer.flare.network/address/0xC1AEA53f0c1EF35219A90Bec9495D3561a4B5951)

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
