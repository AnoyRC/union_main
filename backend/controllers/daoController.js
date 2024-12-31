const { ethers } = require("ethers");
const { getDAOMetadata, uploadDAOMetadata } = require("../helpers/storage");
const config = require("../lib/config");

const uploadDAO = async (req, res) => {
  try {
    const { chainId, name, metadata } = req.body;

    const currentChain = config.chains.find(
      (chain) => chain.chainId === Number(chainId)
    );

    if (!currentChain) {
      throw new Error("Invalid chainId");
    }

    await uploadDAOMetadata(currentChain.chainId, name, metadata);

    res.json({
      success: true,
      message: "DAO metadata uploaded successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const getDAO = async (req, res) => {
  try {
    const { chainId, address } = req.params;

    const currentChain = config.chains.find(
      (chain) => chain.chainId === Number(chainId)
    );

    if (!currentChain) {
      throw new Error("Invalid chainId");
    }

    const dao = currentChain.DAOs.find((dao) => dao.address === address);

    if (!dao) {
      throw new Error("DAO not found");
    }

    const DAOmetadata = await getDAOMetadata(currentChain.chainId, dao.name);

    res.json({
      success: true,
      metadata: DAOmetadata,
      address: dao.address,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const getAllDao = async (req, res) => {
  try {
    const { chainId } = req.params;

    const currentChain = config.chains.find(
      (chain) => chain.chainId === Number(chainId)
    );

    if (!currentChain) {
      throw new Error("Invalid chainId");
    }

    const DAOs = currentChain.DAOs.map((dao) => ({
      name: dao.name,
      address: dao.address,
    }));

    res.json({
      success: true,
      DAOs,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const mintDaoTokens = async (req, res) => {
  try {
    const { chainId, address } = req.body;

    const currentChain = config.chains.find(
      (chain) => chain.chainId === Number(chainId)
    );

    if (!currentChain) {
      throw new Error("Invalid chainId");
    }

    const dao = currentChain.DAOs[0];

    if (!dao) {
      throw new Error("DAO not found");
    }

    const provider = new ethers.providers.JsonRpcProvider(currentChain.rpcUrl);

    const DAOContract = new ethers.Contract(
      dao.address,
      currentChain.deployments.DAO.abi,
      provider
    );

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const data = DAOContract.interface.encodeFunctionData("transfer", [
      address,
      (10 * 10 ** 18).toFixed(0),
    ]);

    const unsignedTx = {
      to: dao.address,
      data: data,
      value: 0,
      maxPriorityFeePerGas: 25000000000, // 25 Gwei (higher than required 20 Gwei)
      maxFeePerGas: 50000000000, //
      gasLimit: 5000000,
    };

    const tx = await wallet.sendTransaction(unsignedTx);

    await tx.wait();

    res.json({
      success: true,
      message: "Tokens minted successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getDAO,
  getAllDao,
  uploadDAO,
  mintDaoTokens,
};
