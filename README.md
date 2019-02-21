# XinFin Light Explorer


XinFin Light is an XinFin MasterNode blockchain explorer built with NodeJS, Express and XinFin-XDC-Client. It does not require an external database and retrieves all information on the fly from a backend XinFin Master Node.

While there are several excellent Ethereum blockchain explorers available (etherscan, ether.camp and etherchain) they operate on a fixed subset of Ethereum networks, usually the mainnet and testnet. Currently there are no network agnostic blockchain explorers available. If you want to develop Dapps on a private testnet or would like to launch a private / consortium network, Etherchain Light will allow you to quickly explore such chains.

## Current Features
* Browse blocks, transactions, accounts and contracts
* View pending transactions
* Display contract internal calls (call, create, suicide)
* Upload & verify contract sources
* Show Solidity function calls & parameters (for contracts with available source code)
* Display the current state of verified contracts
* Named accounts
* Advanced transaction tracing (VM Traces & State Diff)
* View failed transactions
* Live Backend Node status display
* Submit signed Transactions to the Network
* Support for all [Bootswatch](https://bootswatch.com/) skins
* Accounts enumeration
* Signature verification
* Supports IPC and HTTP backend connections
* Responsive layout

## Planned features
* ERC20 Token support

## Getting started

### Setup from source

Supported OS: Ubuntu 16.04


1. Setup a nodejs & npm environment
2. Install the latest version of the XinFin client
3. Setup XinFin Node https://github.com/xinfinorg/XinFin-Node.
4. Clone this repository to your local machine: `git clone https://github.com/AnilChinchawale/X-Light-Explorer --recursive` (Make sure to include `--recursive` in order to fetch the solc-bin git submodule)
5. Install all dependencies: `npm install`
6. Rename `config.js.example` into `config.js` and adjust the file to your local environment
7. Start the explorer: `npm start`
8. Browse to `http://localhost:3000`

