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
            <img src="/images/GArrow.png" alt=""  onClick={toggleCollapsed}/>
          </Arrow>
        </Answer>
        <BurgerNav isVisible={isVisible}>
            <p>We are a highly motivated team dedicated to bridging the gap between web2 and web3 to create a truly valuable project. Our focus encompasses everything from building businesses to improving health and finding innovative ways to generate revenue.</p>
        </BurgerNav>
      </Box>

      <Box>
        <Answer2>
          <span>2- What would be the Utility in Faded? </span>
          <Arrow rotation={rotation2} onClick={handleClick2}>
            <img src="/images/GArrow.png" alt=""  onClick={() => setIsVisible2(!isVisible2)}/>
          </Arrow>
        </Answer2>
          <BurgerNav3 isVisible={isVisible2}>
              <p>For those who didn't got faded, we are offering the opportunity to participate in our alpha program, which includes guidance on starting any type of business, as well as how to trade coins, jpeg, and fiat in any market. Our course is led by extremely successful entrepreneurs who are committed to helping you succeed on any path you choose.</p>
          </BurgerNav3>
      </Box>

      <Box>
        <Answer2>
          <p>3- How do I get whitelisted?</p>
          <Arrow rotation={rotation3} onClick={handleClick3}>
            <img src="/images/GArrow.png" alt=""  onClick={() => setIsVisible3(!isVisible3)}/>
          </Arrow>
        </Answer2>
        <BurgerNav4 isVisible={isVisible3}>
            <p>The king is always watching your actions, so the best way to gain his favor is to provide as much value as possible to our Discord community and work together to succeed. Occasionally, the king will send out quests that can be completed by entering premints or participating in the Alphabot raffle, giving you the chance to get whitelisted!</p>
        </BurgerNav4>
      </Box>

      <Box2>
        <Answer2>
          <p>4- What is the total supply?</p>
          <Arrow rotation={rotation4} onClick={handleClick4}>
            <img src="/images/GArrow.png" alt=""  onClick={() => setIsVisible4(!isVisible4)}/>
          </Arrow>
        </Answer2>
        <BurgerNav5 isVisible={isVisible4}>
          <p>The total supply of Faded NFTs is limited to 3,333 NFTs.</p>
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
  cursor: pointer;
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
    font-size: 22px;
    font-family: BlackChancery;
  }

  @media(max-width: 1890px) {
    width: 1700px;
  }

  @media(max-width: 1770px) {
    width: 1600px;
  }

  @media(max-width: 1620px) {
    width: 1500px;
  }

  @media(max-width: 1565px) {
    width: 1400px;
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

  @media(max-width: 551px) {
    width: 450px;
  }

  @media(max-width: 500px) {
    width: 400px;
  }

  @media(max-width: 450px) {
    width: 350px;
  }
`

const Answer2 = styled(Answer)`
  border-bottom: 0px solid rgb(0, 0, 0);
  margin-top: 0px;

  span {
    font-size: 22px;
    font-family: BlackChancery;
  }

  @media(max-width: 500px) {
    span {
      font-size: 19px;
    }
  }

  @media(max-width: 450px) {
    span {
      font-size: 16px;
    }
  }
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
    font-size: 20px;
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

  @media(max-width: 885px) {
    height: ${props => (props.isVisible ? "140px": 0)};
  }

  @media(max-width: 856px) {
    margin-right: 110px;
    margin-left: 90px;
  }

  @media(max-width: 701px) {
    margin-right: 90px;
    margin-left: 70px;
  }

  @media(max-width: 663px) {
    height: ${props => (props.isVisible ? "160px": 0)};
  }

  @media(max-width: 568px) {
    height: ${props => (props.isVisible ? "180px": 0)};
  }

  @media(max-width: 487px) {
    height: ${props => (props.isVisible ? "240px": 0)};
  }

  @media(max-width: 424px) {
    height: ${props => (props.isVisible ? "290px": 0)};
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
    font-size: 20px;
    font-family: BlackChancery;
  }

  @media(max-width: 1330px) {
    width: 1000px;
  }

  @media(max-width: 1200px) {
    width: 900px;
  }

  @media(max-width: 1124px) {
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
    height: ${props => (props.isVisible ? "150px": 0)};
  }

  @media(max-width: 701px) {
    width: 500px;
    height: ${props => (props.isVisible ? "180px": 0)};
  }

  @media(max-width: 551px) {
    width: 400px;
    height: ${props => (props.isVisible ? "220px": 0)};
  }

  @media(max-width: 500px) {
    width: 350px;
    height: ${props => (props.isVisible ? "240px": 0)};
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
    font-size: 20px;
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
    height: ${props => (props.isVisible ? "120px": 0)};
  }

  @media(max-width: 1070px) {
    margin-right: 150px;
    margin-left: 130px;
  }

  @media(max-width: 975px) {
    margin-right: 130px;
    margin-left: 100px;
  }

  @media(max-width: 895px) {
    height: ${props => (props.isVisible ? "150px": 0)};
  }

  @media(max-width: 856px) {
    margin-right: 110px;
    margin-left: 90px;
  }

  @media(max-width: 745px) {
    height: ${props => (props.isVisible ? "180px": 0)};
  }

  @media(max-width: 701px) {
    margin-right: 90px;
    margin-left: 70px;
  }

  @media(max-width: 600px) {
    height: ${props => (props.isVisible ? "220px": 0)};
  }

  @media(max-width: 533px) {
    height: ${props => (props.isVisible ? "240px": 0)};
  }

  @media(max-width: 500px) {
    height: ${props => (props.isVisible ? "280px": 0)};
  }

  @media(max-width: 464px) {
    height: ${props => (props.isVisible ? "300px": 0)};
  }

  @media(max-width: 433px) {
    height: ${props => (props.isVisible ? "340px": 0)};
  }

  @media(max-width: 417px) {
    height: ${props => (props.isVisible ? "380px": 0)};
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
    font-size: 20px;
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

  @media(max-width: 790px) {
    margin-right: 80px;
    margin-left: 50px;
  }

  @media(max-width: 655px) {
    margin-right: 30px;
    margin-left: 10px;
  }

  @media(max-width: 551px) {
    margin-right: -10px;
    margin-left: -10px;

    p {
      width: 400px;
    }
  }

  @media(max-width: 500px) {
    margin-right: -30px;
    margin-left: -30px;

    p {
      width: 350px;
    }
  }

  @media(max-width: 449px) {
    margin-right: -60px;
    margin-left: -60px;

    p {
      width: 300px;
    }
  }
`