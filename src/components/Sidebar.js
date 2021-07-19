import React from "react"
import styled from "styled-components"
import logo from "../assets/Rectangle 3.svg"
import Input from "./Input"

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>
          Dill <span>Codes</span>
        </h3>
      </LogoWrapper>
      <h4>Sign up</h4>
      <form>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <button>Sign Up</button>
      </form>
      <Terms>
        <p>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </p>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </Terms>
    </Container>
  )
}

const Terms = styled.div`
  p {
    font-size: 10px;
    color: #808080;
    text-align: center;
  }
  h4 {
    margin-top: 0.8rem;
    font-size: 12px;
    span {
      color: #ffa689;
      cursor: pointer;
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    height: 125px;
  }

  h3 {
    color: #ff8d8d;
    font-weight: 800;

    span {
      font-weight: 300;
      color: #70edb9;
    }
  }
`

const Container = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h4 {
    color: #666;
  }

  button {
    width: 89%;
    height: 59px;
    background: #70edb9;
    outline: none;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export default Sidebar
