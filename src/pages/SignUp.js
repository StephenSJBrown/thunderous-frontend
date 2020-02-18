import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FormFeedback } from "reactstrap";

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

const SignUp = () => {
  const [delay, setDelay] = useState(null);
  const [usernameValid, setUsernameValid] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const history = useHistory()

  let id = localStorage.getItem("jwt");

  const handleDelay = (e, callback) => {
    let x = { ...e };
    let newDelay = setTimeout(() => handleInput(x), 300);
    callback(e.target.value);
    setDelay(newDelay);
  };

  const handleInput = e => {
    setText(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleVerifyPassword = e => {
    setVerifyPassword(e.target.value);
  };

  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const emailIsInvalid = () => {
    return !emailRegex.test(email);
  };

  const passwordIsInvalid = () => {
    if (password.length && password.length < 8) {
      return "Password must be at least 8 characters";
    } else {
      return false;
    }
  };

  const verifyPasswordIsInvalid = () => {
    if (verifyPassword.length && verifyPassword === password) {
      return true;
    } else {
      return false;
    }
  };

  const isDisabled = () => {
    return (
      text === "" || email === "" || password === "" || verifyPassword === ""
    );
  };

  const signUp = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: "https://ninja-recyclo.herokuapp.com//api/users/",
      data: {
        username: text,
        email: email,
        password: password,
        cfm_pwd: verifyPassword
      }
    })
      .then(response => {
        console.log(response);
        toast.success(`Welcome to Nextagram, ${text}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        localStorage.setItem("jwt", response.data.new_user.id);
        useHistory.push("/profile");
      })
      .catch(error => {
        console.error(error); // so that we know what went wrong if the request failed
        toast.error(`IT went wrong`, {
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
        <h1>Sign Up</h1> <img src={Logo} alt="" />
      <Form>
        <Paragraph>Username</Paragraph>
        <BoxShadowInput
          type="text"
          value={text}
          autoFocus
          onChange={e => {
            if (delay) {
              clearTimeout(delay);
            }
            handleDelay(e, setText);
          }}
          {...(text.length >= 6
            ? usernameValid
              ? { valid: true }
              : { invalid: true }
            : text.length > 0
            ? { invalid: true }
            : "")}
        />
        <FormFeedback
          {...(text.length > 0 && text.length >= 6
            ? usernameValid
              ? { valid: true }
              : { invalid: true }
            : { invalid: true })}
        >
          {text.length >= 6 ? "Sweet!" : "Must be minimum 6 characters"}
        </FormFeedback>
        <Paragraph>Email</Paragraph>
        <BoxShadowInput
          type="email"
          value={email}
          {...(email.length > 5
            ? emailIsInvalid()
              ? { invalid: true }
              : { valid: true }
            : { invalid: null })}
          onChange={handleEmail}
        />
        <FormFeedback
          {...(email.length > 5
            ? emailIsInvalid()
              ? { invalid: true }
              : { valid: true }
            : { invalid: null })}
        >
          {email
            ? emailIsInvalid()
              ? "Emails should contain @ and none of that other fancy stuff"
              : "That's a solid email, friend"
            : ""}
        </FormFeedback>
        <Paragraph>Password</Paragraph>
        <BoxShadowInput
          type="password"
          value={password}
          onChange={handlePassword}
          {...(password.length > 0
            ? passwordIsInvalid()
              ? { invalid: true }
              : { valid: true }
            : { invalid: null })}
        />
        <FormFeedback
          {...(passwordIsInvalid() ? { invalid: true } : { valid: true })}
        >
          {passwordIsInvalid() ? passwordIsInvalid() : ""}
        </FormFeedback>
        <Paragraph>Retype Password</Paragraph>
        <BoxShadowInput
          type="password"
          value={verifyPassword}
          onChange={handleVerifyPassword}
          {...(verifyPassword.length > 8
            ? verifyPasswordIsInvalid()
              ? { valid: true }
              : { invalid: true }
            : { invalid: null })}
        />
        <FormFeedback
          {...(verifyPassword.length > 8
            ? verifyPasswordIsInvalid()
              ? { valid: true }
              : { invalid: true }
            : { valid: null })}
        >
          {verifyPassword.length > 8
            ? verifyPasswordIsInvalid()
              ? "Great, looks good"
              : "This doesn't match your original password"
            : ""}
        </FormFeedback>
        <Button type="submit" disabled={isDisabled()} onClick={signUp}>
          Sign Up
        </Button>
      </Form>
      <p>
        Already a member? <a href="/login">Log In</a>
      </p>
      <a href="#">T&CS</a>
    </Page>
  );
};

export default SignUp;
