import React from 'react'
import styled from "styled-components";

function HeaderMint() {
  return (
    <Container>
        <Section1>
            <img src="/images/faded-logo.png"/>
        </Section1>

        <Section2>
        <a href="/"><div>
          <ButtonLab>
            <span>Secret Lab</span>
          </ButtonLab>
          </div></a>

           <ButtonMint>
           <span>Mint</span>
          </ButtonMint>
        </Section2>

        <Section3>
          <a href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"><img src="/images/twitter.png"/></a>
          <img src="/images/opensea.png"/>
          <img src="/images/etherscan.png"/>
        </Section3>
    </Container>
  )
}

export default HeaderMint

const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgb(33, 12, 94);
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: white;
  z-index: 100;
`

const Section1 = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;

  img {
      width: 300px;
  }
`

const Section2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration-line: none;
}
`

const ButtonLab = styled.div`
  font-family: Arial;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 24px;
  margin-right: 10px;
  border: none;
  color: white;
  background-color: green;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: white;
    color: green;
  }
}
`

const ButtonMint = styled(ButtonLab)`
  margin-right: 0px;
`

const Section3 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: end;

  img {
    width: 40px;
    margin-right: 20px;
  }
`