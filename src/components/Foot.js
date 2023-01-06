import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Foot() {
  return (
    <Container>
      <LeftNav>
        <Link activeClass="active" to="Body" spy={true} smooth={true}>
          <div>
            <Button>
              <img src="/images/Arrow.png" alt="" />
            </Button>
          </div>
        </Link>
      </LeftNav>

      <RightNav>
        <img src="/images/faded-logo.png" alt="" />
      </RightNav>
    </Container>
  );
}

export default Foot;

const Container = styled.div`
  background-color: rgb(33, 12, 94);
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightNav = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 15px;

  img {
    width: 300px;
  }
`;

const LeftNav = styled.div`
  color: white;
  margin-left: 5%;
`;

const Button = styled.div`
  font-family: Arial;
  font-weight: bold;
  font-size: 20px;
  padding: 20px 23px;
  border: none;
  background-color: green;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s;

  img {
    width: 20px;
    rotate: 180deg;
  }
`;
