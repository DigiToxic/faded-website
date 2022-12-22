import React, {useState} from 'react'
import styled from "styled-components";
import Popup from './Popup';
import FillInTheBlankQuiz from './Quiz';

function Body() {
  const [buttonPopup5, setButtonPopup5] = useState(false);

  return (
    <Container id='Body'>
      <img src="/images/faded.png" alt="" />
      <Button onClick={() => setButtonPopup5(true)}>
        Are you getting faded...?
      </Button>

      <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
        <FillInTheBlankQuiz />
      </Popup>

    </Container>
  )
}

export default Body

const Container = styled.div`
  position: relative;

  img {
    width: 100%; 
    object-fit: contain;
  }
`

const Button = styled.div`
  position: absolute;
  color: white;
  font-size: 30px;
  z-index: 3;
  top: 105px;
  left: 120px;

  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 24px;
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
`