import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { keccak256 } from 'ethers/lib/utils';
import MerkleTree from 'merkletreejs';
import abi from './abi/abi.json';

const contractAddress = "0xa9D01C95439a186A66be50A0C0C6326aBa8262F0";
const API_KEY = "VRRW7A39QJDDVF698UJFWU1R9V5FABRMQJ";

const addresses = ["0x9A41426ae9C88110188276bAF8046dC420005249",
"0x2F6e6Cf9f8ace6C9bb3bDE1D991c844e20B1F1d2",
"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
"0x90F79bf6EB2c4f870365E785982E1f101E93b906",
"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
"0x976EA74026E726554dB657fA54763abd0C3a0aa9",
"0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
"0xB9277bb50FA9bD8Da38085622f5B782D47a64339",
"0xD028780dDCBBD7930a9C27da65D3ca6f440E5127",
"0x9A41426ae9C88110188276bAF8046dC420005249"
];

function MintButton() {

	const [mintAmount, setMintAmount] = useState(1);
	const [currentAccount, setCurrentAccount] = useState(null);
	let [totalSupply, setSupply] = useState("");

	const [proof, setProof] = useState([""]);
		
	let leaf = "";

	const checkWalletIsConnected  = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log("Make sure you have Metamask installed!");
			return;
		} else {
			console.log("Wallet exist! We are ready to go!");const accounts = await ethereum.request({ method: "eth_accounts" });

			const leaves = addresses.map(x => keccak256(x))
			const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
			const buf2hex = (x) => '0x' + x.toString('hex')
			
			console.log("root", buf2hex(tree.getRoot()))

			leaf = keccak256(accounts[0]) // accounts from accounts using accountsconnect/metamask
			setProof(tree.getProof(leaf).map(x => buf2hex(x.data)));
		
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
			let amount = mintAmount;

			console.log("Initialize payment");
			let cost = 0.04 * mintAmount;
			// let nftTxn = await nftContract.mint(mintAmount, { value: ethers.utils.parseEther(cost.toString()) });
			console.log("proof", proof);

			let nftTxn = await nftContract.WLmint(proof, mintAmount, {value: ethers.utils.parseEther(cost.toString())});
			console.log("Minting... please wait!");
			await nftTxn.wait();

			console.log(`Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

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

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setMintAmount(function (prevCount) {
			if (prevCount < 2) {
      return (prevCount += 1);
		} else {
			return (prevCount = 2);
		}
    });
  }

  function decrement() {
    setMintAmount(function (prevCount) {
      if (prevCount = 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 1);
      }
    });
  }
	
  return (
    <Container>
      <Name>Testing</Name>
    <div>
	  	{currentAccount ? mintNftButton() : connectWalletButton()}
    </div>
	  	<h2>Total Minted: {totalSupply}</h2>
			<button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
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