import React, { useState } from "react";
import styled from "styled-components";

function HeaderMint() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Section1>
        <a href="/">
          <div>
            <img src="/images/faded-logo.png" alt="" />
          </div>
        </a>
      </Section1>

      <Section3>
        <div>
          <a
            href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/images/twitter.png" alt="" />
          </a>
        </div>
        <img src="/images/opensea.png" alt="" />
        <img src="/images/etherscan.png" alt="" />
      </Section3>

      <OpenWrapper>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setBurgerStatus(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </OpenWrapper>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBurgerStatus(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseWrapper>
        <a
          href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/twitter.png" alt="" />
        </a>
        <img src="/images/opensea.png" alt="" />
        <img src="/images/etherscan.png" alt="" />
      </BurgerNav>
    </Container>
  );
}

export default HeaderMint;

const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgb(33, 12, 94);
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: white;
  z-index: 100;
`;

const Section1 = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;

  img {
    width: 300px;
  }
`;

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

  @media (max-width: 950px) {
    display: none;
  }
`;

const OpenWrapper = styled.div`
  width: 60px;
  display: none;

  svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 950px) {
    display: initial;
  }
`;

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
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  display: none;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 40px;
  }

  @media (max-width: 950px) {
    display: initial;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
