const DAOabi = require("./contracts/DAO.json");
const UnionProxyFactoryabi = require("./contracts/UnionProxyFactory.json");
const ConvictionUnionabi = require("./contracts/ConvictionUnion.json");
const EqualUnionabi = require("./contracts/EqualUnion.json");
const NFTUnionabi = require("./contracts/NFTUnion.json");
const TraditionalUnionabi = require("./contracts/TraditionalUnion.json");
const QuadraticUnionabi = require("./contracts/QuadraticUnion.json");

const config = {
  chains: [
    {
      name: "NeoX T4",
      chainId: 12227332,
      rpcUrl: "https://neoxt4seed1.ngd.network/",
      deployments: {
        DAO: {
          address: "",
          abi: DAOabi,
        },
        UnionProxyFactory: {
          address: "0x614ae60954f0AEdd172141A9C52052a8B422DEfd",
          abi: UnionProxyFactoryabi,
        },
        ConvictionUnion: {
          address: "0x44950f083691828A07c17d2A927B435e8B272F6D",
          abi: ConvictionUnionabi,
        },
        EqualUnion: {
          address: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
          abi: EqualUnionabi,
        },
        NFTUnion: {
          address: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
          abi: NFTUnionabi,
        },
        TraditionalUnion: {
          address: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
          abi: TraditionalUnionabi,
        },
        QuadraticUnion: {
          address: "0xE34906Eda6Cf2cafFa1d567523C7954fDf9E80E0",
          abi: QuadraticUnionabi,
        },
      },
      DAOs: [
        {
          address: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
          name: "NeoXDAO",
        },
      ],
      NFT: [
        {
          address: "0x21709908c8c8aA55F20Be21F58E79352A9b7D790",
          name: "NounsDAO",
        },
      ],
    },
    {
      name: "NeoX",
      chainId: 47763,
      rpcUrl: "https://mainnet-1.rpc.banelabs.org/",
      deployments: {
        DAO: {
          address: "",
          abi: DAOabi,
        },
        UnionProxyFactory: {
          address: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
          abi: UnionProxyFactoryabi,
        },
        ConvictionUnion: {
          address: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
          abi: ConvictionUnionabi,
        },
        EqualUnion: {
          address: "0x44950f083691828A07c17d2A927B435e8B272F6D",
          abi: EqualUnionabi,
        },
        NFTUnion: {
          address: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
          abi: NFTUnionabi,
        },
        TraditionalUnion: {
          address: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
          abi: TraditionalUnionabi,
        },
        QuadraticUnion: {
          address: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
          abi: QuadraticUnionabi,
        },
      },
      DAOs: [
        {
          address: "0xd17Dd62290EcdEa48e5029a4fBd519245C911c19",
          name: "NeoXDAO",
        },
      ],
      NFT: [
        {
          address: "0xE34906Eda6Cf2cafFa1d567523C7954fDf9E80E0",
          name: "NounsDAO",
        },
      ],
    },
  ],
};

module.exports = config;
