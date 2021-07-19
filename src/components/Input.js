import React from "react"
import styled from "styled-components"

const Input = ({ placeholder, type }) => {
  return (
    <Container>
      <StyledInput
        type={type ? type : "text"}
        placeholder={placeholder}
        required
        autoComplete="no"
      />
      <Status></Status>
    </Container>
  )
}

const StyledInput = styled.input`
  height: 54px;
  padding: 0 2rem;
  margin: 0.5rem 0;
  border: none;
  outline: none;

  background: #f5f5f5;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`
const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Input
