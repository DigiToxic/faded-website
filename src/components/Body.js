import React from 'react'
import styled from "styled-components";

function Body() {
  return (
    <Container id='Body'>
      <img src="/images/faded.png" />
    </Container>
  )
}

export default Body

const Container = styled.div`
  position: relative;

  img {
    width: 100%; 
    object-fit: contain;
  }
`