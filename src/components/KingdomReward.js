import React from 'react'
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Fade from 'react-reveal/Fade';

function KingdomReward() {
  return (
    <Container id='Kingdom'>
      <Fade left>
        <KingdomName>
          <span>Kingdom's reward</span>
        </KingdomName>
        </Fade>

        <Splash>
              <img src="/images/splash/splash 1.png" alt="" />
        </Splash>

        <Fade right>
        <Kingdom>
          <img src="/images/castle.png" />
          <KingdomText>
          <p>The king offers all his soldiers who successfully execute their mission will have the gratitude of receiving eternal wealth, no matter what path the soldier decides to take. It can be magic money as well as real money.</p>
          <p>Health and eternal freedom are another option given by the king and finally, the possibility of speaking freely with the high leaders.</p>
          </KingdomText>
        </Kingdom>
        </Fade>

      <Slider className='Overflow'>
        <Marquee gradient={false} speed={200} className="Marquee">
          <FirstDiv>
            <img src="/images/Carousel/Faded 1.jpg" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Faded 2.jpg" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Faded 3.jpg" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Faded 4.jpg" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Faded 5.jpg" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Faded 6.jpg" />
          </SixDiv>
          <SevenDiv>
            <img src="/images/Carousel/Faded 7.jpg" />
          </SevenDiv>
          <HeightDiv>
            <img src="/images/Carousel/Faded 8.jpg" />
          </HeightDiv>
          <NineDiv>
            <img src="/images/Carousel/Faded 9.jpg" />
          </NineDiv>
          <LastDiv>
            <img src="/images/Carousel/Faded 10.jpg" />
          </LastDiv>
          <FirstDiv>
            <img src="/images/Carousel/Faded 1.jpg" />
          </FirstDiv>
          <SecondDiv>
            <img src="/images/Carousel/Faded 2.jpg" />
          </SecondDiv>
          <ThirdDiv>
            <img src="/images/Carousel/Faded 3.jpg" />
          </ThirdDiv>
          <ForthDiv>
            <img src="/images/Carousel/Faded 4.jpg" />
          </ForthDiv>
          <FiveDiv>
            <img src="/images/Carousel/Faded 5.jpg" />
          </FiveDiv>
          <SixDiv>
            <img src="/images/Carousel/Faded 6.jpg" />
          </SixDiv>
          <SevenDiv>
            <img src="/images/Carousel/Faded 7.jpg" />
          </SevenDiv>
          <HeightDiv>
            <img src="/images/Carousel/Faded 8.jpg" />
          </HeightDiv>
          <NineDiv>
            <img src="/images/Carousel/Faded 9.jpg" />
          </NineDiv>
          <LastDiv>
            <img src="/images/Carousel/Faded 10.jpg" />
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
  }
`

const Kingdom = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 600px;
    margin-top: 70px;
    margin-left: 30px;
    box-shadow: 1px 1px 30px;
    border-radius: 20px;
  } 
`

const KingdomText = styled.div`
  margin-top: 200px;
  margin-left: 30px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1300px) {
    margin-top: 170px;
  }

  @media (max-width: 1100px) {
    margin-top: 130px;
  }

  p {
    margin-bottom: 30px;
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

const Splash = styled.div`
  position: absolute;
  left: 80%;
  
  img {
      width: 300px;
      opacity: 0.8;
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