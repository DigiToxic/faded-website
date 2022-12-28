import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll';

function FootMint() {
  return (
    <Container>
      <RightNav>
        <img src="/images/faded-logo.png" alt="" />
      </RightNav>
    </Container>
  )
}

export default FootMint

const Container = styled.div`
  background-color: rgb(33, 12, 94);
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

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
`