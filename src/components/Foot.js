import React from 'react'
import styled from 'styled-components'

function Foot() {
  return (
    <Container>
      <RightNav>
        <img src="/images/faded-logo.png" />
      </RightNav>
    </Container>
  )
}

export default Foot

const Container = styled.div`
  background-color: rgb(33, 12, 94);
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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