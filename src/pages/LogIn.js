import React, { useState } from "react";
import { useHistory,Redirect} from 'react-router-dom'

import { FormFeedback } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";

import Page from "../components/Page";
import Button from "../components/Button";
import { BoxShadowInput, Paragraph } from "../styles/Profile";

import Logo from "../icons/RecycloLogo.png";

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 24px 0;
`;
const Flex = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const LogIn = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const id = localStorage.getItem("jwt");
  const history = useHistory()



  const handleInput = e => {
    setText(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const isDisabled = () => {
    return text === "" || password === "";
  };

  const logIn = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: "http://localhost:5000/api/login",
      data: {
        username: text,
        password: password
      }
    })
      .then(response => {
        console.log(response);
        toast.success(`Welcome back, ${text}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        localStorage.setItem("jwt", response.data.user.id);
        history.push("/")
      })
      .catch(error => {
        console.error(`Error: ${error}`); // so that we know what went wrong if the request failed
        toast.error(`Something went wrong`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
      });
  };


  if (id) {
    return <Redirect to="/" />
  }

  return (
    <Page>
      <h1>Log In</h1> <img alt="" src={Logo} />
      <Form>
        <div>
        <Paragraph>Username</Paragraph>
        <BoxShadowInput
          type="text"
          onChange={handleInput}
          value={text}
        />
        <FormFeedback></FormFeedback>
        </div>
        <div>
        <Paragraph>Password</Paragraph>
        <BoxShadowInput
          type="password"
          onChange={handlePassword}
          value={password}
        />
        <FormFeedback></FormFeedback>
        </div>
      <Button type="submit" onClick={logIn} disabled={isDisabled()}>
        Log In
      </Button>
      </Form>
      <Flex>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </Flex>
      <a href="#">T&CS</a>
    </Page>
  );
};

export default LogIn;
