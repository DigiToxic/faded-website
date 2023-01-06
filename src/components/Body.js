import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import FillInTheBlankQuiz from "./Quiz";

function Body() {
  const [buttonPopup5, setButtonPopup5] = useState(false);

  return (
    <Container id="Body">
      <img src="/images/lab.gif" alt="" id="Top" />
      <Button onClick={() => setButtonPopup5(true)}>
        Are you getting faded...?
      </Button>

      <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
        <FillInTheBlankQuiz />
      </Popup>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  position: relative;
  margin-top: 60px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Button = styled.div`
  position: absolute;
  color: white;
  z-index: 3;
  top: 50px;
  left: 50px;

  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 29px;
  margin-right: 10px;
  border: none;
  color: white;
  background-color: purple;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: white;
    color: purple;
  }

  @media (max-width: 808px) {
    font-size: 15px;
    top: 15px;
    left: 10px;
    padding: 8px 25px;
  }

  @media (max-width: 570px) {
    font-size: 13px;
    top: 15px;
    left: 10px;
    padding: 6px 18px;
  }
`;
