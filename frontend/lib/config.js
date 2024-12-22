import DAOabi from "./contracts/DAO.json";
import UnionProxyFactoryabi from "./contracts/UnionProxyFactory.json";
import ConvictionUnionabi from "./contracts/ConvictionUnion.json";
import EqualUnionabi from "./contracts/EqualUnion.json";
import NFTUnionabi from "./contracts/NFTUnion.json";
import TraditionalUnionabi from "./contracts/TraditionalUnion.json";
import QuadraticUnionabi from "./contracts/QuadraticUnion.json";

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
  ],
};

export default config;
