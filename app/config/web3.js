const HDWalletProvider = require('@truffle/hdwallet-provider')

const Web3 = require('web3')

const provider = new HDWalletProvider(
   "bind primary harvest hole negative job mixed bar dog pipe enact extend",
   "HTTP://127.0.0.1:7545"

)
const web3 = new Web3(provider);

const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_password",
				"type": "uint256"
			}
		],
		"name": "login",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "logout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_password",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "writeMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allUsers",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isLoggedIn",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMessage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x168713537407603a8a2AC9B6004b319849617257";

const Contract = new web3.eth.Contract(ABI, contractAddress);

// // // console.log(contract)
// async function getAccounts(){
//     const gotAccounts = await web3.eth.getAccounts();
//     // console.log(gotAccounts);

//     let gotStruct = await Contract.methods.allUsers(gotAccounts[0]).call();
//     console.log(gotStruct)
// }

// getAccounts();



exports.contract = Contract;
exports.web3 = web3;