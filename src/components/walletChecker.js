import React, { useState } from "react";
import { addresses } from "./MintButton";
import styled from 'styled-components';

function WalletChecker() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCheckAddress() {
    const isInArray = addresses.includes(address);

    if (isInArray) {
      setResult("The address is whitelisted");
    } else {
      setResult("The address is not whitelisted");
    }
  }

  return (
    <Container>
      <input type="text" id="address" value={address} placeholder="Write wallet here..." onChange={handleAddressChange} />
      <button type="button" onClick={handleCheckAddress}>
        Check address
      </button>
      <Text><p>{result}</p></Text>
    </Container>
  );
}

export default WalletChecker

const Container = styled.div`
  margin-top: 5px;

  button {
    cursor: pointer;
    border: none;
    padding: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgb(178, 58, 255);
    color: white;

    &:active {
      background-color: rgb(204, 153, 255);
    }
  }

  input {
    padding-top: 4.7px;
    padding-bottom: 4.7px;
    border: 1px solid black;
    padding-left: 5px;
    width: 330px;

    @media(max-width: 1400px) {
      width: 290px;
    }

    @media(max-width: 1260px) {
      width: 260px;
    }

    @media(max-width: 1190px) {
      width: 230px;
    }

    @media(max-width: 1090px) {
      width: 200px;
    }

    @media(max-width: 1000px) {
      width: 330px;
    }
  }
`

const Text = styled.div`
  margin-top: 10px;
  color: white;
`