import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
      <Container>
          <Section1>
              <img src="/images/faded-logo.png"/>
          </Section1>

          <Section2>
          <Link activeClass="active" to="Body" spy={true} smooth={true}><div>
            <ButtonLab>
              <span>Secret Lab</span>
            </ButtonLab>
            </div></Link>

            <Link to="Kingdom" spy={true} smooth={true}><div>
            <ButtonKingdom>
              <span>Kingdom</span>
            </ButtonKingdom>
            </div></Link>

            <Link to="Team" spy={true} smooth={true}><div>
            <ButtonNobles>
              <span>Nobles</span>
            </ButtonNobles>
            </div></Link>

            <Link to="Elixir" spy={true} smooth={true}><div>
            <ButtonElixirs>
              <span>Elixirs</span>
            </ButtonElixirs>
            </div></Link>

            <a href="/MintButton"><div>
           <ButtonMint>
           <span>Mint</span>
          </ButtonMint>
          </div></a>
          </Section2>

          <Section3>
            <div><a href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"><img src="/images/twitter.png"/></a></div>
            <img src="/images/opensea.png"/>
            <img src="/images/etherscan.png"/>
          </Section3>
          
        <OpenWrapper>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </OpenWrapper>
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>
              <li><Link to="Body" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>Secret Lab</Link></li>
              <li><Link to="Kingdom" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>Kingdom</Link></li>
              <li><Link to="Team" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>Nobles</Link></li>
              <li><Link to="Elixir" spy={true} smooth={true} onClick={() => setBurgerStatus(false)}>Elixirs</Link></li>
              <a href="/MintButton"><div><li><a href="/MintButton">Mint</a></li></div></a>
              <a href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"><img src="/images/twitter.png"/></a>
              <img src="/images/opensea.png"/>
              <img src="/images/etherscan.png"/>
          </BurgerNav>

      </Container>
  )
}

export default Header

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

  @media(max-width: 1123px) {
    img {
      width: 95%;
    }
  }

  @media(max-width: 950px) {
      img {
        width: 300px;
    }
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

@media(max-width: 950px) {
  display: none;
}
`
const ButtonKingdom = styled(ButtonLab)`

`
const ButtonNobles = styled(ButtonLab)`

`
const ButtonElixirs = styled(ButtonLab)`

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

  div {
    margin-top: 6px;
  }

  @media(max-width: 950px) {
    display: none;
  }
`

const OpenWrapper = styled.div`
  width: 60px;
  margin-top: 17px;
  display: none;

  @media(max-width: 950px) {
    display: initial;
  }
`

const CustomMenu = styled(MenuIcon)`
  color: white;
  transform: scale(2);

  @media(max-width: 950px) {
    cursor: pointer;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(238, 213, 238);
  width: 35%;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;
  display: none;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-weight: bold;
  }

  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 40px;
  }


  @media(max-width: 950px) {
    display: initial;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  transform: scale(1.4);
`