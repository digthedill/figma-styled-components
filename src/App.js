import React from "react"
import styled from "styled-components"

import BgImg from "./assets/bg.png"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Wrapper = styled.div`
  background: url(${BgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  display: flex;
`
export default App
