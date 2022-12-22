import React from 'react'
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";

function KingdomReward() {
  return (
    <Container id='Kingdom'>
      <Fade duration={1000} delay={500} direction="left" triggerOnce="true">
        <KingdomName>
          <span>Kingdom's reward</span>
        </KingdomName>
      </Fade>
      <Splash1>
        <img src="/images/splash/splash 1.png" alt="" />
      </Splash1>

      <Fade duration={1000} delay={500} direction="right" triggerOnce="true">
        <Kingdom>
          <img src="/images/castle.png" alt="" />
          <KingdomText>
            <p>The king offers all his soldiers who successfully execute their mission will have the gratitude of receiving eternal wealth, no matter what path the soldier decides to take. It can be magic money as well as real money.</p>
            <p>Health and eternal freedom are another option given by the king and finally, the possibility of speaking freely with the high leaders.</p>
          </KingdomText>
        </Kingdom>
      </Fade>

      <Slider className='Overflow'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Faded 1.jpg" alt="" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Faded 2.jpg" alt="" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Faded 3.jpg" alt="" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Faded 4.jpg" alt="" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Faded 5.jpg" alt="" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Faded 6.jpg" alt="" />
          </SixDiv>
          <SevenDiv>
            <img src="/images/Carousel/Faded 7.jpg" alt="" />
          </SevenDiv>
          <HeightDiv>
            <img src="/images/Carousel/Faded 8.jpg" alt="" />
          </HeightDiv>
          <NineDiv>
            <img src="/images/Carousel/Faded 9.jpg" alt="" />
          </NineDiv>
          <LastDiv>
            <img src="/images/Carousel/Faded 10.jpg" alt="" />
          </LastDiv>
          <FirstDiv>
            <img src="/images/Carousel/Faded 1.jpg" alt="" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Faded 2.jpg" alt="" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Faded 3.jpg" alt="" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Faded 4.jpg" alt="" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Faded 5.jpg" alt="" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Faded 6.jpg" alt="" />
          </SixDiv>
          <SevenDiv>
            <img src="/images/Carousel/Faded 7.jpg" alt="" />
          </SevenDiv>
          <HeightDiv>
            <img src="/images/Carousel/Faded 8.jpg" alt="" />
          </HeightDiv>
          <NineDiv>
            <img src="/images/Carousel/Faded 9.jpg" alt="" />
          </NineDiv>
          <LastDiv>
            <img src="/images/Carousel/Faded 10.jpg" alt="" />
          </LastDiv>
        </Marquee>
      </Slider>

      <Splash2>
        <img src="/images/splash/splash 2.png" alt="" />
      </Splash2>
    </Container>
  )
}

export default KingdomReward

const Container = styled.div`
  position: relative;
  background-color: rgb(234, 189, 252);
  padding-bottom: 70px;
`

const KingdomName = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
    justify-content: center;
    border: 5px solid black;
    padding: 6px;
    border-radius: 15px;
    color: green;
  }
`

const Kingdom = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 600px;
    margin-top: 70px;
    margin-left: 50px;
    box-shadow: 1px 1px 30px;
    border-radius: 20px;
  } 

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-left: 0px;
    }

  @media (max-width: 1300px) {
    img {
      width: 500px;
    }
  }
`

const KingdomText = styled.div`
  margin-top: 190px;
  margin-left: 60px;
  margin-right: 100px;
  font-size: 20px;
  font-weight: bold;

  p {
    margin-bottom: 30px;
  }

  @media (max-width: 1880px) {
    margin-top: 200px;
  }

  @media (max-width: 1500px) {
    margin-top: 190px;
  }

  @media (max-width: 1300px) {
    margin-top: 170px;
  }

  @media (max-width: 1200px) {
    margin-top: 140px;
  }

  @media (max-width: 1040px) {
    margin-left: 100px;
    margin-top: 80px;
    font-size: 22px;
  }

  @media (max-width: 1300px) {
    font-size: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }
`

const Slider = styled.div`
  margin-top: 80px;
  img {
    width: 300px;
    border-radius: 20px;
  } 
`

const FirstDiv = styled.div`
  margin-left: 60px;
`

const SecondDiv = styled.div`
  margin-left: 60px;
`

const ThirdDiv = styled.div`
  margin-left: 60px;
`

const ForthDiv = styled.div`
  margin-left: 60px;
`

const FiveDiv = styled.div`
  margin-left: 60px;
`

const SixDiv = styled.div`
  margin-left: 60px;
`

const SevenDiv = styled.div`
  margin-left: 60px;
`

const HeightDiv = styled.div`
  margin-left: 60px;
`

const NineDiv = styled.div`
  margin-left: 60px;
`

const LastDiv = styled.div`
  margin-left: 60px;
`

const Splash1 = styled.div`
  position: absolute;
  left: 80%;
  
  img {
      width: 100%;
      opacity: 0.8;
    }

    @media (max-width: 1040px) {
      left: 70%;
      top: 40%;
    }
`

const Splash2 = styled.div`
  position: absolute;
  left: 80px;
  bottom: -200px;
  
  img {
      width: 300px;
      opacity: 0.8;
    }
`