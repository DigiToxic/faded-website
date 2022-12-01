import React from 'react'
import styled from "styled-components";

function Popup(props) {
  return (props.trigger) ? (
    <PopUp>
      <Box>
        <span onClick={() => props.setTrigger(false)}>x</span>
        {props.children}
      </Box>
    </PopUp>
  ) : "";
};

export default Popup

const PopUp = styled.div`
  position: fixed;
  background: rgb(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  animation: fadeIn 1s;
  z-index: 10;
`

const Box = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 75vh - 20px);
  background: rgb(234, 189, 252);
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;

  span {
    content: 'x';
    cursor: pointer;
    position: fixed;
    right: calc(10% - 30px);
    top: calc(100vh - 75vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;

  }
`