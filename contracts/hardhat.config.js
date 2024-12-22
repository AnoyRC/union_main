require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
        details: {
          yulDetails: {
            optimizerSteps: "u",
          },
        },
      },
      evmVersion: "paris",
      viaIR: true,
    },
  },
  networks: {
    neoxtestnet: {
      url: `https://neoxt4seed1.ngd.network/`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      neoxtestnet: "YOUR_API_KEY",
    },
    customChains: [
      {
        network: "neoxtestnet",
        chainId: 12227332,
        urls: {
          apiURL: "https://xt4scan.ngd.network/api",
          browserURL: "https://xt4scan.ngd.network/",
        },
      },
    ],
  },
};
