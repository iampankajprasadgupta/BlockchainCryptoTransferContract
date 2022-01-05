require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'http//',
      account: 'nbcbvhdbfhbn'
    },
    ganache: {
        url: "http://127.0.0.1:8545",
        // accounts: 'c50ea08e18b9e75e0e4b719a0a888d57a726f3e1d96b8a5a69d306b6716f5589'
    }
    
  },
};
