# Architecting a Blockchain Supply Solution



This report describes the architecture of a blockchain solution that tracks the supply of coffee from the Farmer to the Consumer. 



## Project Planning

The following UML diagrams describe the architecture, the processes and the roles involved.

**Activity Diagram**

![Activity_coffee](images/Activity_coffee.png)





**Sequence Diagram**

![Sequence-coffee](images/Sequence-coffee.png)



**States Diagram**

![States-coffee](images/States-coffee.png)



**Classes Diagram**

![Classes-coffee](images/Classes-coffee.png)



## Smart Contract Development

As shown in the diagrams, the constacts are grouped in the following classes:

- **AccessControl** - Collection of Contracts: These contracts manages the various addresses and constraints for operations that can be executed only by specific roles.
- **Base** - SupplyChain.sol: This is where we define the most fundamental code shared throughout the core functionality. This includes our main data storage, constants and data types, plus internal functions for managing these items.
- **Core** - Ownable.sol: is the contract that controls ownership and transfer of ownership.


The main contract is the `SupplyChain.sol ` one. 

The following four roles are defined:


- **Farmer**: The Farmer can harvest coffee beans, process coffee beans, pack coffee palettes, add coffee palettes, ship coffee palettes, and track authenticity.
- **Distributor**: The Distributor can buy coffee palettes and track authenticity.
- **Retailer**: The Retailer can receive coffee palettes and track authenticity.
- **Consumer**: The consumer can buy coffee palettes and track authenticity.


The smart contract code is implemented in the `contracts` folder. 



## Smart contract testing

To test code verifies the validity of the contract function and lies in the test folder. 

## Smart contract deployment

The contract is deployed in the Rinkeby network, using truffle and Infura.

- **Infura key:**  `7ef91bed5f3a4ae3b4761644e4fd8920`

```
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x5844fcf17ee1fab08d34e8187e9c334d17c595306708ba712f0dcab717969c8f
  Migrations: 0xc2efd0b24aab3e625e56b21c229866335b92e9a9
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying FarmerRole...
  ... 0xa6f2bdb5ecc4954fbaab1e6eefe00b91027b964ccca5c4e5ae4f6bb4dd2c453c
  FarmerRole: 0xfc612acda6b09041cc716c6c8853ae86bf3e7e01
  Deploying DistributorRole...
  ... 0x4824ed846653499017bfc05c2b74ca28c8e80faa912ca812c43b2d514158529d
  DistributorRole: 0x03eefcef7eebff7627f5f86da24a1054612f8f2f
  Deploying RetailerRole...
  ... 0x222e5042f9d9bb370de93995cddf32b30eee04e27599030f92507b1a2d1fff95
  RetailerRole: 0x50e8b69f067f14ae50891b1ff31104f1f1318822
  Deploying ConsumerRole...
  ... 0x8c15a8e6c4e9d4a2a309efc77bbbe31b9bdde1c543f063616baa4c6cc9e59fd0
  ConsumerRole: 0x4f3a27f02b4192d6d1b6fb6341f016191035afe4
  Deploying SupplyChain...
  ... 0xd715073877a82023edcd948b140efb7063bdf29d3b1eff06b0cb3d94581c3c69
  SupplyChain: 0x54b70d49863b774f7bbdcc92c77097294b1e5ea6
Saving artifacts...
```

And is found in the address:

https://rinkeby.etherscan.io/address/0x54b70d49863b774f7bbdcc92c77097294b1e5ea6



## Smart Contract Interaction

The contract is tested locally for the client to interact. The `index.html` file is providing the interface. This is a simple interface where one account, the owner one is used to perform all the actions. In practice however, more accounts are assigned to specific roles and each one can perform the actions that is allowed. 

The following command is run initially to set the accounts: 

`ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"`

and the generated accounts are:

```
(0) 0x27d8d15cbc94527cadf5ec14b69519ae23288b95 (~100 ETH) 
(1) 0x018c2dabef4904ecbd7118350a0c54dbeae3549a (~100 ETH)
(2) 0xce5144391b4ab80668965f2cc4f2cc102380ef0a (~100 ETH)
(3) 0x460c31107dd048e34971e57da2f99f659add4f02 (~100 ETH)
(4) 0xd37b7b8c62be2fdde8daa9816483aebdbd356088 (~100 ETH)
...
```

and are assigned to the roles:

```
0: Owner
1: Farmer
2: Distributor
3: Retailer
4: Consumer
```

In this example, only the owner account is used to perform the actions and the log is :

![transaction_history](images/transaction_history.png)

### Tools and packages

The following tools are used:

- Truffle v4.1.15 (core: 4.1.15)
- Solidity v0.4.25 (solc-js)
- npm@6.7.0 
- web3@1.0.0-beta.46