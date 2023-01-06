import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Elixir() {
  return (
    <Container id="Elixir">
      <Splash4>
        <img src="/images/splash/splash 4.png" alt="" />
      </Splash4>

      <ElixirName>
        <span>Elixirs</span>
      </ElixirName>

      <ElixirBox>
        <Fade triggerOnce="true">
          <ElixirImage>
            <img src="/images/elixir.gif" alt="" />
          </ElixirImage>
        </Fade>

        <TextContainer>
          <Fade triggerOnce="true">
            <ElixirText>
              <p>
                In a far-off kingdom, a greedy king discovered a tree with
                energy-renewing essence and began injecting his subjects with
                it. The substance became addictive and the entire kingdom became
                dependent on it, undergoing physical changes and becoming more
                alien-like. The tree eventually died and disaster struck when a
                branch broke, freeing the addicted workers. The guards turn to
                you for help in finding the 3333 escaped workers before they
                exhaust all of their energy.
              </p>
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
  );
}

export default Elixir;

const Container = styled.div`
  margin-top: 5px;
  background-color: rgb(234, 189, 252);
  padding-bottom: 30px;
`;

const ElixirName = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-family: Morris Roman;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    text-align: center;
    justify-content: center;
    border: 5px solid black;
    padding: 6px;
    border-radius: 15px;
    color: green;
  }
`;

const ElixirBox = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ElixirImage = styled.div`
    
  img {
    border-radius: 20px;
    width: 500px;
    margin-left: 45px;
    margin-top: 60px;
  }

  @media(max-width: 1368px) {
    img {
      margin-top: 50px;
    }
  }

  @media (max-width: 1270px) {
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
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ElixirText = styled.div`
  margin-right: 45px;
  width: 700px;
  margin-top: 60px;
  z-index: 5;

  p {
    font-size: 27px;
    font-family: BlackChancery;
    margin-bottom: 30px;
  }

  @media (max-width: 1880px) {
    font-size: 22px;
  }

  @media (max-width: 1721px) {
    font-size: 21px;
  }

  @media (max-width: 1611px) {
    font-size: 18px;
  }

  @media (max-width: 1350px) {
    margin-top: 45px;
    font-size: 19px;
    margin-left: 30px;
  }

  @media (max-width: 1305px) {
    width: 600px;
  }

  @media (max-width: 1270px) {
    font-size: 20px;
    width: initial;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

const Splash4 = styled.div`
  position: absolute;
  top: 2550px;
  left: 50px;
  z-index: 1;
  img {
    width: 300px;
    opacity: 0.8;
  }
`;

const Splash5 = styled.div`
  position: absolute;
  top: 3150px;
  left: 15%;
  z-index: 10;
  img {
    width: 25%;
    opacity: 0.9;
  }

  @media (max-width: 1049px) {
    top: 3500px;
    right: 0%;

    img {
      width: 15%;
      opacity: 0.5;
    }
  }

  @media (max-width: 660px) {
    top: 3800px;
    left: 20%;

    img {
      width: 20%;
      opacity: 0.5;
    }
  }
`;

const Splash6 = styled.div`
  position: absolute;
  top: 2800px;
  right: 50px;
  z-index: 10;
  img {
    width: 500px;
    opacity: 0.5;
  }

  @media (max-width: 1138px) {
    top: 2800px;
    right: 100px;

    img {
      width: 300px;
      opacity: 0.5;
    }
  }

  @media (max-width: 1049px) {
    top: 3000px;
    right: 100px;
  }

  @media (max-width: 660px) {
    top: 3200px;
    right: 10px;
    opacity: 0.9;
  }
`;
