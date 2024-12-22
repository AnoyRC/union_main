const Redis = require("ioredis");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const redisConfig = {
  host:
    process.env.REDIS_HOST ||
    "redis-10902.c305.ap-south-1-1.ec2.redns.redis-cloud.com",
  port: process.env.REDIS_PORT || 10902,
  username: "owner",
  password: process.env.REDIS_API_KEY, // Redis API key/password
  tls: process.env.REDIS_TLS === "true" ? {} : undefined, // Enable TLS if needed
};

const redisClient = new Redis(redisConfig);

module.exports = redisClient;
