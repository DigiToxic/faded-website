import React, { useState } from 'react';
import styled from "styled-components";

function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [rotation4, setRotation4] = useState(0);

  const toggleCollapsed = () => {
    setIsVisible(!isVisible);
  }

  const handleClick = () => {
    setRotation(rotation + 180)
  };

  const handleClick2 = () => {
    setRotation2(rotation2 + 180);
  };

  const handleClick3 = () => {
    setRotation3(rotation3 + 180);
  };

  const handleClick4 = () => {
    setRotation4(rotation4 + 180);
  };

  return (
    <Container id='FAQ'>
      
      <FAQName>
        <span>FAQ</span>
      </FAQName>

      <Box>
        <Answer>
          <p>1- Who are we?</p>

          <Arrow rotation={rotation} onClick={handleClick}>
            <img src="/images/GArrow.png" onClick={toggleCollapsed}/>
          </Arrow>
        </Answer>
        <BurgerNav isVisible={isVisible}>
            <p>Ledding by a team of blockchain enthusiasts and collectors that have experience in fields like business management, design, and software development.</p>
        </BurgerNav>
      </Box>

      <Box>
        <Answer2>
          <p>2- Utility? </p>
          <Arrow rotation={rotation2} onClick={handleClick2}>
            <img src="/images/GArrow.png" onClick={() => setIsVisible2(!isVisible2)}/>
          </Arrow>
        </Answer2>
          <BurgerNav3 isVisible={isVisible2}>
              <p>Utility is a mysterious force that drives our actions, yet it remains hidden from view. We can only trust our instincts and make our best guesses. Even the most carefully planned actions can be upended by the unpredictable nature of utility. Only time will tell!</p>
          </BurgerNav3>
      </Box>

      <Box>
        <Answer2>
          <p>3- How do I get whitelisted?</p>
          <Arrow rotation={rotation3} onClick={handleClick3}>
            <img src="/images/GArrow.png" onClick={() => setIsVisible3(!isVisible3)}/>
          </Arrow>
        </Answer2>
        <BurgerNav4 isVisible={isVisible3}>
            <p>Register to our <a href="https://www.premint.xyz/home/">premint</a> or engaging with our tweets, providing value to our discord, and being with a 1:1 call with our founder and our team!.</p>
        </BurgerNav4>
      </Box>

      <Box2>
        <Answer2>
          <p>4- What is the total supply?</p>
          <Arrow rotation={rotation4} onClick={handleClick4}>
            <img src="/images/GArrow.png"  onClick={() => setIsVisible4(!isVisible4)}/>
          </Arrow>
        </Answer2>
        <BurgerNav5 isVisible={isVisible4}>
          <p>Faded total supply is limited to 3,333 NFTs.</p>
        </BurgerNav5>
      </Box2>

    </Container>
  )
}

export default FAQ

const Container = styled.div`
  margin-top: 5px;
  background-color: rgb(234, 189, 252);
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FAQName = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-family: Morris Roman;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
    justify-content: center;
    border: 5px solid black;
    padding: 6px;
    border-radius: 15px;
    color: green;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box2 = styled(Box)`
  border-bottom: 2px solid rgb(0, 0, 0);
`

const Answer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
  border-top: 2px solid rgb(0, 0, 0);
  width: 1300px;
  height: 80px;

  p {
    font-family: Comic Sans MS;
    font-size: 22px;
    font-family: BlackChancery;
  }

  @media(max-width: 1420px) {
    width: 1200px;
  }

  @media(max-width: 1330px) {
    width: 1000px;
  }

  @media(max-width: 1125px) {
    width: 800px;
  }

  @media(max-width: 920px) {
    width: 700px;
  }

  @media(max-width: 790px) {
    width: 600px;
  }

  @media(max-width: 655px) {
    width: 500px;
  }
`

const Answer2 = styled(Answer)`
  border-bottom: 0px solid rgb(0, 0, 0);
  margin-top: 0px;
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  transform: rotate(${props => props.rotation}deg);
  transition: .3s;

  img {
    width: 50px;
  }
`

const BurgerNav = styled.div`
  margin-right: 100px;
  margin-left: 120px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
    font-family: BlackChancery;
  }

  @media(max-width: 1330px) {
    margin-right: 170px;
    margin-left: 170px;
  }

  @media(max-width: 1200px) {
    margin-right: 100px;
    margin-left: 140px;
  }

  @media(max-width: 1150px) {
    margin-left: 100px;
  }

  @media(max-width: 1125px) {
    margin-right: 160px;
    margin-left: 150px;
  }

  @media(max-width: 1070px) {
    margin-right: 150px;
    margin-left: 130px;
  }

  @media(max-width: 975px) {
    margin-right: 130px;
    margin-left: 100px;
  }

  @media(max-width: 856px) {
    margin-right: 110px;
    margin-left: 90px;
  }

  @media(max-width: 701px) {
    margin-right: 90px;
    margin-left: 70px;
  }
`

const BurgerNav3 = styled.div`
  width: 1200px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
    font-family: BlackChancery;
  }

  @media(max-width: 1330px) {
    width: 1000px;
  }

  @media(max-width: 1200px) {
    width: 800px;
  }

  @media(max-width: 1125px) {
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 930px) {
    width: 700px;
  }

  @media(max-width: 856px) {
    width: 600px;
    height: ${props => (props.isVisible ? "130px": 0)};
  }

  @media(max-width: 701px) {
    width: 500px;
    height: ${props => (props.isVisible ? "140px": 0)};
  }
`

const BurgerNav4 = styled.div`
  margin-right: 100px;
  margin-left: 120px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
    font-family: BlackChancery;
  }

  @media(max-width: 1330px) {
    margin-right: 170px;
    margin-left: 170px;
  }

  @media(max-width: 1200px) {
    margin-right: 100px;
    margin-left: 140px;
  }

  @media(max-width: 1150px) {
    margin-left: 100px;
  }

  @media(max-width: 1125px) {
    margin-right: 160px;
    margin-left: 150px;
  }

  @media(max-width: 1070px) {
    margin-right: 150px;
    margin-left: 130px;
  }

  @media(max-width: 975px) {
    margin-right: 130px;
    margin-left: 100px;
  }

  @media(max-width: 856px) {
    margin-right: 110px;
    margin-left: 90px;
  }

  @media(max-width: 701px) {
    margin-right: 90px;
    margin-left: 70px;
    height: ${props => (props.isVisible ? "120px": 0)};
  }
`

const BurgerNav5 = styled.div`
  margin-right: 100px;
  margin-left: 120px;
  height: ${props => (props.isVisible ? "100px": 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  p {
    font-family: Comic Sans MS;
    font-size: 17px;
    font-family: BlackChancery;
  }

  @media(max-width: 1330px) {
    margin-right: 170px;
    margin-left: 170px;
  }

  @media(max-width: 1200px) {
    margin-right: 100px;
    margin-left: 140px;
  }

  @media(max-width: 1150px) {
    margin-left: 100px;
  }

  @media(max-width: 1125px) {
    margin-right: 160px;
    margin-left: 150px;
  }

  @media(max-width: 1070px) {
    margin-right: 150px;
    margin-left: 130px;
  }

  @media(max-width: 975px) {
    margin-right: 130px;
    margin-left: 100px;
  }

  @media(max-width: 856px) {
    margin-right: 110px;
    margin-left: 90px;
  }

  @media(max-width: 701px) {
    margin-right: 90px;
    margin-left: 70px;
  }
`