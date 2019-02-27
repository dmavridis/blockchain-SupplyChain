var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'someone patient cement diesel inmate snap develop inform bread harbor quiz firm';

module.exports = {
  networks: { 
    // development: {
    //   host: 'localhost',
    //   port: 8545,
    //   network_id: "*"
    // }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/5e3af3ca9e4242149a996c77d9a5adb2') 
      },
      network_id: 4
    }
  }
};