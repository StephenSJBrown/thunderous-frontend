import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

import Page from "../components/Page";
import LoadingIndicator from "../components/LoadingIndicator";

const Profile = () => {
  const id = localStorage.getItem("jwt");

  const [isLoading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${id}`)
      .then(result => {
        console.log(result.data);
        const {
          username,
          email,
          contact,
          profileImage,
          backgroundImage
        } = result.data;
        setUsername(username);
        setEmail(email);
        setContact(contact);
        setContact(contact);
        setProfileImage(profileImage);
        setBackgroundImage(backgroundImage);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        toast.error(`Unable to retrieve profile information, ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
        setIsLoading(false);
      });
  }, []);

  const handleUpdate = () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/users/c${id}`,
      data: {
        username,
        email,
        password,
        contact
      }
    })
      .then(response => {
        console.log(response);
        toast.success(`Profile updated`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        toast.error(`Unable to update, ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
        setIsLoading(false);
      });
  };
  const BackgroundImage = styled.div`
    background: #41ff08;
    background: -moz-linear-gradient(
      left,
      #41ff08 0%,
      #06910e 50%,
      #1a3c25 100%
    );
    background: -webkit-linear-gradient(
      left,
      #41ff08 0%,
      #06910e 50%,
      #1a3c25 100%
    );
    height: 25vh;
    width: 100vw;
    background-image: ${backgroundImage};
  `;

  const ProfileImage = styled.div`
    border-radius: 100px;
    border-width: 3em;
    border-color: black;
    background-color: red;
    height: 150px;
    width: 150px;
    background-image: ${profileImage};
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 25vh;
  `;
  const SpaceAround = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const Flexend = styled.div`
    height:10vh;
    display: flex;
    align-items: flex-end;
  `;

  return (
    <>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <Page>
            <BackgroundImage>
              <Flex>
                <ProfileImage></ProfileImage>
              </Flex>
            </BackgroundImage>
            <h2>User Profile Page</h2>
              <SpaceAround>
                <p>Username</p>
                <input value={username}></input>
                <p>Email</p>
                <input value={email}></input>
                <p>Password</p>
                <input value={password}></input>
                <p>Contact</p>
                <input value={contact}></input>
              </SpaceAround>
            <Flexend>
                <button onClick={handleUpdate}>Update profile</button>
            </Flexend>
          </Page>
        </>
      )}
    </>
  );
};

export default Profile;
