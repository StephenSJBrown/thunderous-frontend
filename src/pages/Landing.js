import React from "react";
import { useHistory } from "react-router-dom";

import styled from 'styled-components'

import Page from '../components/Page'
import Button from "../components/Button";

import Logo from "../icons/recycloLogo.svg";

const headerStyle = {
  textAlign: "center"
};

const divStyle = {
  textAlign: "center",
  marginTop: "50px"
};

const footerStyle = {
  // backgroundColor:'red',
  width: "100vw",
  display: "flex",
  marginTop: "80px",
  justifyContent: "space-around"
};

const Landing = () => {
  const history = useHistory();

  const signup = () => {
    history.push("/signup");
  };

  const login = () => {
    history.push("/login");
  };

  const Flex = styled.div`
  display: flex;
  justify-content: center;
  `


  return (
    <Page>
      <header style={headerStyle}>
        <img src={Logo} />
      </header>
      <h1>Welcome to <br/> RECYLCO </h1>
      <div style={divStyle}>
        <Button onClick={signup}>Sign Up</Button>
        <p style={{ marginTop: "30px" }}>or</p>
        <Button onClick={login}>Log In</Button>
      </div>
      <footer style={footerStyle}>
        <a href="">T&C's</a>
      </footer>
    </Page>
  );
};

export default Landing;
