import React from "react"
import styled from "styled-components"
const Main = () => {
  return (
    <Container>
      <h1>
        Join The <br />
        Team
      </h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  h1 {
    color: #343434;
    font-size: 55px;
    font-weight: bold;
    @media (max-width: 900px) {
      display: none;
    }
  }
`

export default Main
