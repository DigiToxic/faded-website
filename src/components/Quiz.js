import React, { useState } from 'react';
import styled from "styled-components";

function FillInTheBlank() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);


  function handleSubmit() {
    if (inputValue === "" || inputValue2 === "" || inputValue3 === "") {
      setMessage('The king need a answer!');
    } else {
      setMessage('');
      Whitelist()
    }
  }

  function Whitelist() {
    const random = Math.random();
    const number = Math.floor(random * 3);
    setRandomNumber(number);
    setButtonDisabled(true);
  }
  
  let text;
  if (randomNumber === 0) {
    text = 'You are now Whitelisted! Please open a ticket in our discord with the proof!';
  } else if (randomNumber >= 1) {
    text = 'You did not get Whitelisted...';
  } else {
    text = '';
  }

  return (
    <Container>
      <h1>The king want to ask you some questions...</h1>
      <Question1>
      <p>What do you think is the reason behind the name “faded” ?</p>
        <input
          type="text"
          className="blank"
          placeholder="Write here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Question1>

      <Question2>
      <p>What would u think faded's utility will be ?</p>
        <input
          type="text"
          className="blank"
          placeholder="Write here..."
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
      </Question2>

      <Question3>
      <p> Had you gotten the chance, would you like to be a builder or a successor ? </p>
        <input
          type="text"
          className="blank"
          placeholder="Write here..."
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
        />
      </Question3>
      <Button>
        <button disabled={buttonDisabled} onClick={handleSubmit}>Submit</button><p>{message}</p>
      </Button>
      <Text><p>{text}</p></Text>
    </Container>
  );
}

export default FillInTheBlank;

const Container = styled.div`
    h1 {
      font-family: Morris Roman;
      text-align: center;
      margin-right: 35%;
      margin-left: 35%;
      margin-top: 0px;
      margin-bottom: 30px;
      font-size: 2em;

      @media(max-width: 1200px) {
        margin-right: 30%;
        margin-left: 30%;
      }

      @media(max-width: 901px) {
        margin-right: 20%;
        margin-left: 20%;
      }

      @media(max-width: 600px) {
        margin-right: 10%;
        margin-left: 10%;
      }
    }
  }
`

const Question1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  p {
    font-family: BlackChancery;
    margin-bottom: 10px;
    margin-left: 2px;
    font-size: 20px;
  }

  input {
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 90px;
    font-family: San serif;
    font-size: 18px;
    border-radius: 20px;
    border-width: 0.5px;
    border-style: solid;
  }
`

const Question2 = styled(Question1)`

`

const Question3 = styled(Question1)`
  margin-bottom: 30px;
`

const Text = styled.div`
  margin-top: 20px;

  p {
    font-size: 20px;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    background-color: green;
    color: white;
    border: none;

    &:hover {
      background-color: white;
      color: green;
      box-shadow: 5px 5px black;
    }

    &:active {
      box-shadow: 0px 0px black;
      margin-left: 5px;
      margin-right: -5px;
      margin-top: 5px;
      margin-bottom: -5px;

    }
  }

  p {
    margin-left: 20px;
    font-size: 20px;
  }
`