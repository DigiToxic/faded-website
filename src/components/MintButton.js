import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import MerkleTree from "merkletreejs";
import abi from "./abi/abi.json";
import WalletChecker from "./walletChecker";

const contractAddress = "0x54f2c38d2c6F155Ec8edc044D65A7A69afe9DB0b";
const API_KEY = "VRRW7A39QJDDVF698UJFWU1R9V5FABRMQJ";

export const addresses = [
  "0x9A41426ae9C88110188276bAF8046dC420005249",
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
  "0x9A41426ae9C88110188276bAF8046dC420005249",
];

function MintButton() {
  const [mintAmount, setMintAmount] = useState(1);
  const [currentAccount, setCurrentAccount] = useState(null);
  let [totalSupply, setSupply] = useState("");

  const [proof, setProof] = useState([""]);

  let leaf = "";

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exist! We are ready to go!");
      const accounts = await ethereum.request({ method: "eth_accounts" });

      const leaves = addresses.map((x) => keccak256(x));
      const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
      const buf2hex = (x) => "0x" + x.toString("hex");

      console.log("root", buf2hex(tree.getRoot()));

      leaf = keccak256(accounts[0]); // accounts from accounts using accountsconnect/metamask
      setProof(tree.getProof(leaf).map((x) => buf2hex(x.data)));

      console.log("proof", proof);
      console.log(accounts);

      if (accounts.lenght !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let amount = mintAmount;

        console.log("Initialize payment");
        let cost = 0.04 * amount;
        // let nftTxn = await nftContract.mint(amount, { value: ethers.utils.parseEther(cost.toString()) });
        console.log("proof", proof);

        let nftTxn = await nftContract.WLmint(proof, amount, {
          value: ethers.utils.parseEther(cost.toString()),
        });
        console.log("Minting... please wait!");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return <Button1 onClick={connectWalletHandler}>Connect Wallet</Button1>;
  };

  const mintNftButton = () => {
    return <Button2 onClick={mintNftHandler}>Mint NFT</Button2>;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkWalletIsConnected();
  });

  async function fetchData() {
    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${API_KEY}`
    );
    const mintedTokens = await response.json();
    setSupply(mintedTokens.result);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      if (prevCount === 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  return (
    <Container>
      <Door>
        <Button>
          {currentAccount ? mintNftButton() : connectWalletButton()}
        </Button>
        <PlusMoins>
          <ButtonPlus onClick={increment}>
            <div>+</div>
          </ButtonPlus>
          <ButtonMoins onClick={decrement}>
            <div>-</div>
          </ButtonMoins>
        </PlusMoins>
        <MintAmount>Minting: {mintAmount}</MintAmount>
        <TotalSupply>Total Minted: {totalSupply}</TotalSupply>
      </Door>
      <Ligne></Ligne>
      <WLchecker>
        <WalletChecker />
      </WLchecker>
    </Container>
  );
}

export default MintButton;

const Container = styled.div`
  text-align: center;
  padding-bottom: 47px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_e1e8f6bf485444998699b0b84cd6f3a7~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 1500px) {
    padding-bottom: 8px;
  }

  @media (max-width: 1450px) {
    padding-bottom: 11px;
  }

  @media (max-width: 1385px) {
    padding-bottom: 21px;
  }

  @media (max-width: 1300px) {
    padding-bottom: 21px;
  }

  @media (max-width: 1220px) {
    padding-bottom: 49px;
  }

  @media (max-width: 1060px) {
    padding-bottom: 74px;
  }
`;

const Door = styled.div`
  display: inline-block;
  border-top-left-radius: 192px;
  border-top-right-radius: 192px;
  padding-top: 100px;
  padding-bottom: 132px;
  padding-right: 99px;
  padding-left: 99px;
  text-align: center;
  margin-top: 125px;
  background-color: rgb(255, 255, 255, 0.5);

  @media (max-width: 1881px) {
    margin-top: 130px;
    padding-bottom: 225px;
    padding-right: 145px;
    padding-left: 145px;
    border-top-left-radius: 250px;
    border-top-right-radius: 250px;
  }

  @media (max-width: 1500px) {
    margin-top: 84px;
    padding-bottom: 125px;
  }

  @media (max-width: 1450px) {
    margin-top: 91px;
    padding-bottom: 115px;
    padding-right: 90px;
    padding-left: 90px;
  }

  @media (max-width: 1385px) {
    margin-top: 101px;
    padding-bottom: 95px;
    padding-right: 83px;
    padding-left: 83px;
  }

  @media (max-width: 1300px) {
    margin-top: 118px;
    padding-bottom: 65px;
    padding-right: 73px;
    padding-left: 73px;
  }

  @media (max-width: 1220px) {
    margin-top: 130px;
    padding-bottom: 38px;
    padding-right: 62px;
    padding-left: 62px;
  }

  @media (max-width: 1140px) {
    margin-top: 145px;
    padding-bottom: 12px;
    padding-right: 52px;
    padding-left: 52px;
  }

  @media (max-width: 1060px) {
    margin-top: 158px;
    padding-top: 10px;
    padding-bottom: 32px;
    padding-right: 45px;
    padding-left: 45px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button1 = styled.div`
  padding: 15px;
  border: none;
  border-radius: 12px;
  width: 170px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  background: rgb(32, 129, 226);

  @media (max-width: 1060px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

const Button2 = styled.div`
  padding: 15px;
  border: none;
  border-radius: 12px;
  width: 150px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  background: rgb(178, 58, 255);

  @media (max-width: 1060px) {
    padding: 10px;
    margin-top: 60px;
  }
`;

const PlusMoins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonPlus = styled.div`
  margin-right: 20px;
  cursor: pointer;

  div {
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    background-color: green;
    position: relative;
    padding: 0px 20px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;
    box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  div:active {
    top: 10px;
    background-color: darkgreen;

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 darkgreen;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3pxpx 0 darkgreen;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 darkgreen;
  }

  @media (max-width: 1060px) {
    div {
      font-size: 30px;
      padding: 0px 11.3px;
    }
  }
`;

const ButtonMoins = styled.div`
  margin-left: 20px;
  cursor: pointer;

  div {
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    background-color: green;
    position: relative;
    padding: 0px 20px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;
    box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 darkgreen;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  div:active {
    top: 10px;
    background-color: darkgreen;

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 darkgreen;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3pxpx 0 darkgreen;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 darkgreen;
  }

  @media (max-width: 1060px) {
    div {
      font-size: 30px;
      padding: 0px 15px;
    }
  }
`;

const MintAmount = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-top: 30px;
`;

const TotalSupply = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Ligne = styled.div`
  position: absolute;
  padding: 110px 190px;
  border-right: 10px solid rgb(0, 0, 0);
  border-left: 10px solid rgb(0, 0, 0);
  top: 5%;
  left: 3%;
  box-shadow: 1px 1px 100px;

  @media (max-width: 1400px) {
    padding: 110px 170px;
  }

  @media (max-width: 1260px) {
    padding: 110px 157px;
  }

  @media (max-width: 1190px) {
    padding: 110px 142px;
  }

  @media (max-width: 1090px) {
    padding: 110px 130px;
  }

  @media (max-width: 1000px) {
    padding: 40px 200px;
    top: 4%;
    left: 27%;
    right: 27%;
    margin: auto;
  }

  @media (max-width: 904px) {
    top: 4%;
    left: 22%;
    right: 22%;
    margin: auto;
  }

  @media (max-width: 753px) {
    top: 4%;
    left: 17%;
    right: 17%;
    margin: auto;
  }

  @media (max-width: 645px) {
    top: 4%;
    left: 12%;
    right: 12%;
    margin: auto;
  }
`;

const WLchecker = styled.div`
  position: absolute;
  background-color: rgb(150, 111, 51);
  padding: 10px;
  top: 30%;
  left: 1%;
  box-shadow: 1px 1px 50px;
  border-radius: 15px;

  @media (max-width: 1260px) {
    padding: 7px;
  }

  @media (max-width: 1000px) {
    padding-top: 5px;
    padding-bottom: 5px;
    top: 13%;
    left: 25%;
    right: 25%;
    margin: auto;
  }

  @media (max-width: 904px) {
    padding-top: 5px;
    padding-bottom: 5px;
    top: 13%;
    left: 20%;
    right: 20%;
    margin: auto;
  }

  @media (max-width: 753px) {
    padding-top: 5px;
    padding-bottom: 5px;
    top: 13%;
    left: 15%;
    right: 15%;
    margin: auto;
  }

  @media (max-width: 645px) {
    padding-top: 5px;
    padding-bottom: 5px;
    top: 13%;
    left: 10%;
    right: 10%;
    margin: auto;
  }
`;
