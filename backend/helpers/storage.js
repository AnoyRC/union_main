const axios = require("axios");

const uploadDAOMetadata = async (chainId, name, metadata) => {
  try {
    // Add DAO Bucket name for the DAO
    const bucketID = process.env.DAO_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "multipart/form-data",
    };

    const file = new FormData();

    const blob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });

    file.append("file", blob, `${name}.json`);
    file.append("path", `/${chainId}`);

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketID}/upload`,
      file,
      { headers }
    );

    // POST ${API_BASE_URL}/buckets/${bucketID}/files

    if (res.data.files_details[0].status !== "success")
      throw new Error(res.data.error_code);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDAOMetadata = async (chainId, name) => {
  try {
    // Add DAO Bucket name for the DAO
    const bucketId = process.env.DAO_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "application/json",
      // responseType:"json"
    };

    const body = {
      path: `/${chainId}/${name}.json`,
    };

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketId}/download`,
      body,
      { headers }
    );

    // GET `${API_BASE_URL}/buckets/${bucketId}/files/${chainId}_${name}/download`

    if (!res.data.name) throw new Error("File not found");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const uploadProposalMetadata = async (proposal) => {
  try {
    // Add Proposal Bucket name for the Proposal
    const bucketID = process.env.PROPOSAL_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "multipart/form-data",
    };

    const file = new FormData();

    const blob = new Blob([JSON.stringify(proposal)], {
      type: "application/json",
    });

    file.append("file", blob, `${proposal.id}.json`);
    file.append("path", `/`);

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketID}/upload`,
      file,
      { headers }
    );

    // POST ${API_BASE_URL}/buckets/${bucketID}/files

    if (res.data.files_details[0].status !== "success")
      throw new Error(res.data.error_code);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProposalMetadata = async (proposalId) => {
  try {
    // Add Proposal Bucket name for the Proposal
    const bucketId = process.env.PROPOSAL_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "application/json",
      // responseType:"json"
    };

    const body = {
      path: `/${proposalId}.json`,
    };

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketId}/download`,
      body,
      { headers }
    );

    // GET `${API_BASE_URL}/buckets/${bucketId}/files/${proposalId}/download`

    if (!res.data.id) throw new Error("File not found");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const uploadUnionMetadata = async (chainId, proxyAddress, metadata) => {
  try {
    // Add Union Bucket name for the Union
    const bucketID = process.env.UNION_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "multipart/form-data",
    };

    const file = new FormData();

    const blob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });

    // file.append("file", blob, `${chainId}_${proxyAddress}.json`);
    file.append("file", blob, `${proxyAddress}.json`);
    file.append("path", `/${chainId}/`);

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketID}/upload`,
      file,
      { headers }
    );

    // POST ${API_BASE_URL}/buckets/${bucketID}/files

    if (res.data.files_details[0].status !== "success")
      throw new Error(res.data.error_code);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUnionMetadata = async (chainId, proxyAddress) => {
  try {
    // Add Union Bucket name for the Union
    const bucketId = process.env.UNION_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "application/json",
      // responseType:"json"
    };

    const body = {
      path: `/${chainId}/${proxyAddress}.json`,
    };

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketId}/download`,
      body,
      { headers }
    );

    // GET `${API_BASE_URL}/buckets/${bucketId}/files/${chainId}_${proxyAddress}.json/download`

    if (!res.data.proxyAddress) throw new Error("File not found");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const listAllUnion = async (chainId) => {
  try {
    // Add Union Bucket name for the Union
    const bucketId = process.env.UNION_ID;

    const headers = {
      Authorization: `Bearer ${process.env.CHAINSAFE_API_KEY}`,
      "Content-Type": "application/json",
    };

    const body = {
      path: `/${chainId}/`,
    };

    const res = await axios.post(
      `https://api.chainsafe.io/api/v1/bucket/${bucketId}/ls`,
      body,
      { headers }
    );

    // GET ${API_BASE_URL}/buckets/${bucketId}/files`

    // const filteredData = res.data.files.filter(
    //   (file) => file.split("_")[0] === chainId
    // );

    // return filteredData;

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getDAOMetadata,
  uploadProposalMetadata,
  getProposalMetadata,
  uploadUnionMetadata,
  getUnionMetadata,
  listAllUnion,
  uploadDAOMetadata,
};
