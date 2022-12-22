import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Elixir() {
  return (
    <Container id='Elixir'>

        <Splash4>
          <img src="/images/splash/splash 4.png" alt="" />
        </Splash4>

        <ElixirName>
          <span>Elixirs</span>
        </ElixirName>

        <ElixirBox>
        <Fade triggerOnce="true">
        <ElixirImage>
            <img src="/images/elixir.png" alt="" />
        </ElixirImage>
        </Fade>

         <TextContainer>
            <Fade triggerOnce="true">
            <ElixirText>
              <p>In a very distant time, there was a kingdom called "The Faded Kingdom", crowned by a king envious of power and manipulation. This kingdom was intended to wash out the inhabitants of it by making them work until their complete exhaustion, that is to say, their death.</p>
              <p>One day, the king found, in the basement of his kingdom, a gigantic purple tree filled with renewing energy. After a few years of testing, he had concluded that it could greatly improve the performance of its inhabitants.</p>
              <p>After returning to the surface, he kidnapped some helpless villagers to inject them with this liquid substance that renews the user's energy. Unfortunately, the side effects were not known and they will soon find out that this liquid will soon turn into a drug.</p>
              <p>More and more people, until the complete kingdom was completely kidnapped to be able to improve their sources of energy of their body and to make so that these villagers survive longer and work longer. The more the years passed, the more the use of this liquid substance was obligatory. Since the body was used to receiving it and without it, the human body could no longer live.</p>
              <p>The whole body changes shape, before more human, but now a kind of alien. The rate of use of the liquid kept increasing, to the point that the tree itself was dying.</p>
              <p>The king was getting more and more worried, but he couldn't stop. He wanted to take everything for his daily wealth, but then the day came... One of the branches snapped and the liquid flowed out of the lab, freeing the drugged workers.</p>
              <span>The guards, therefore, ask you to help them find the 888 escaped workers before they die, drained of their energy.</span>
            </ElixirText>
            </Fade>

            <Splash5>
                <img src="/images/splash/splash 5.png" alt="" />
            </Splash5>

            <Splash6>
                <img src="/images/splash/splash 6.png" alt="" />
            </Splash6>

          </TextContainer>
        </ElixirBox>
    </Container>
  )
}

export default Elixir

const Container = styled.div`
  margin-top: 5px;
  background-color: rgb(234, 189, 252);
  padding-bottom: 30px;
`

const ElixirName = styled.div`
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

const ElixirBox = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const ElixirImage = styled.div`
  display: grid;
  grid-template-columns: 700px 700px;

  img {
    width: 600px;
    margin-left: 45px;
    margin-top: 60px;
  }

  @media(max-width: 1368px) {
    img {
      margin-top: 50px;
    }
  }

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      margin-left: 0px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 500px;
    }

      @media (max-width: 500px) {
    img {
      width: 400px;
    }

    @media (max-width: 401px) {
      img {
        width: 350px;
      }
  }
`

const TextContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  p {
    margin-top: 0px;
    margin-bottom: 30px;
  }

  span {
    font-family: Anonymous Pro;
  }
`

const ElixirText = styled.div`
  margin-top: 80px;
  margin-right: 45px;
  font-size: 20px;
  font-weight: bold;
  z-index: 5;

  @media(max-width: 1880px) {
    margin-top: 150px;
    font-size: 22px;
  }

  @media(max-width: 1721px) {
    margin-top: 135px;
    font-size: 21px;
  }

  @media(max-width: 1611px) {
    margin-top: 60px;
    font-size: 18px;
  }

  @media(max-width: 1355px) {
    margin-top: 40px;
    font-size: 19px;
  }

  @media(max-width: 1316px) {
    margin-top: 50px;
    font-size: 17.5px;
    line-height: 20px;
  }

  @media(max-width: 1050px) {
    font-size: 20px;
    margin-right: 40px;
    margin-left: 40px;
  }
`

const Splash4 = styled.div`
  position: absolute;
  top: 2550px;
  left: 50px;
  z-index: 1;
  img {
      width: 300px;
      opacity: 0.8;
    }
`

const Splash5 = styled.div`
  position: absolute;
  top: 3150px;
  left: 15%;
  z-index: 10;
  img {
      width: 25%;
      opacity: 0.9;
    }

    @media(max-width: 1049px) {
      top: 3700px;
      left: 20%;

      img {
        width: 50%;
        opacity: 0.5;
      }
    }

    @media(max-width: 660px) {
      top: 4000px;
      left: 20%;
    }
`

const Splash6 = styled.div`
  position: absolute;
  top: 2800px;
  right: 50px;
  z-index: 10;
  img {
      width: 500px;
      opacity: 0.5;
    }

    @media(max-width: 1138px) {
      top: 2800px;
      right: 100px;

      img {
        width: 300px;
        opacity: 0.5;
      }
    }

    @media(max-width: 1049px) {
      top: 3000px;
      right: 100px;
    }

    @media(max-width: 660px) {
      top: 3200px;
      right: 10px;
      opacity: 0.9;
    }
`