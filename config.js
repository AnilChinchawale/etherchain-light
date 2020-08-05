var web3 = require('xdc3');
var net = require('net');

var config = function () {
  
  this.logFormat = "dev";
  // this.ipcPath = process.env["HOME"] + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  // this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  this.rpcPath = "https://rpc.apothem.network";
  this.provider = new web3.providers.HttpProvider(this.rpcPath);

  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = {
    "xdc4f7900282f3d371d585ab1361205b0940ab1789c": "XinFin-MN-001" 
  }
  
}

module.exports = config;