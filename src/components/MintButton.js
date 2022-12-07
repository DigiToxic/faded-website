import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { keccak256 } from 'ethers/lib/utils';
import MerkleTree from 'merkletreejs';

const contractAddress = "0xD020E2D62b35AD1e7fAf36AFBBff6e59688c1f9b";
const API_KEY = "VRRW7A39QJDDVF698UJFWU1R9V5FABRMQJ";
const abi = [
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintERC2309QuantityExceedsLimit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnershipNotInitializedForExtraData",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "toTokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "ConsecutiveTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];
const addresses = ["0xB9277bb50FA9bD8Da38085622f5B782D47a64339",
"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
"0x90F79bf6EB2c4f870365E785982E1f101E93b906",
"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
"0x976EA74026E726554dB657fA54763abd0C3a0aa9",
"0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
];

function MintButton() {

	const [mintAmount, setMintAmount] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  let [totalSupply, setSupply] = useState("");

  const checkWalletIsConnected  = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exist! We are ready to go!");
    }

		const accounts = await ethereum.request({ method: "eth_accounts" });

		const leaves = addresses.map(x => keccak256(x))
		const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
		const buf2hex = (x) => '0x' + x.toString('hex')
	
		let leaf = "";
		let proof = [""];
		
		console.log("root", buf2hex(tree.getRoot()))
		
		if (accounts !== undefined) {
			leaf = keccak256(accounts) // accounts from accounts using accountsconnect/metamask
			proof = tree.getProof(leaf).map(x => buf2hex(x.data))
		}
	
		console.log("proof", proof)
		console.log(accounts)

		if (accounts.lenght !== 0) {
			const account = accounts[0];
			console.log("Found an authorized account: ", account);
			setCurrentAccount(account);
		} else {
			console.log("No authorized account found");
		}
  }
		const connectWalletHandler = async () => {
		const { ethereum } = window;
			
			if (!ethereum) {
			alert("Please install Metamask!");
		}

		try {
			const accounts = await ethereum.request({ method: "eth_requestAccounts"});
			console.log("Found an account! Address: ", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (err) {
			console.log(err);
		}
	} 

  const mintNftHandler = async () => {
	try {
		const { ethereum } = window;

		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const nftContract = new ethers.Contract(contractAddress, abi, signer);

			console.log("Initialize payment");
			let nftTxn = await nftContract.mint(mintAmount, proof, { value: ethers.utils.parseEther(mintAmount*0.04) });
			console.log("Minting... please wait!");
			await nftTxn.wait();

			console.log("Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}");

		} else {
			console.log("Ethereum object doesn't exist");
		}
	} catch (err) {
		console.log(err);
	}
  }

  const connectWalletButton = () => {
    return (
      <Button1 onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </Button1>
    )
  }

  const mintNftButton = () => {
    return (
      <Button2 onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </Button2>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  async function fetchData()  {
	const response = await fetch(
	  `https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${API_KEY}`
	)
	const mintedTokens = await response.json()
	setSupply(mintedTokens.result)
   }

     useEffect(() => {
	fetchData();
	},[]);


	
  return (
    <Container>
      <Name>Testing</Name>
    <div>
	  	{currentAccount ? mintNftButton() : connectWalletButton()}
    </div>
	  	<h2>Total Minted: {totalSupply}</h2>
			<h2>Minting: {mintAmount}</h2>
    </Container>
  )
}

export default MintButton

const Container = styled.div`
	text-align: center;
	padding-bottom: 200px;
	background-color: rgb(255, 255, 255);
`

const Name = styled.div`
	text-align: center;
	margin: 100px;
`

const Button1 = styled.div`
	padding: 15px;
	border: none;
	border-radius: 12px;
	min-width: 250px;
	color: white;
	font-size: 18px;
	cursor: pointer;
	background: rgb(32, 129, 226);
`

const Button2 = styled.div`
	padding: 15px;
	border: none;
	border-radius: 12px;
	min-width: 250px;
	color: white;
	font-size: 18px;
	cursor: pointer;
	background: orange;
`