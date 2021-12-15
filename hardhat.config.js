require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const proyectId = process.env.INFURA_PROYECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${proyectId}`,
      accounts: [privateKey],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${proyectId}`,
      accounts: [privateKey],
    },
  },
};
