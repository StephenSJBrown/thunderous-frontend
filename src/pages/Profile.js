import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

import Button from "../components/Button";
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
    background: #a49792;
    background: -moz-linear-gradient(
      left,
      #a49792 0%,
      #cbc0b7 0%,
      #74756d 100%
    );
    background: -webkit-linear-gradient(
      left,
      #a49792 0%,
      #cbc0b7 0%,
      #74756d 100%
    );
    background: linear-gradient(to right, #a49792 0%, #cbc0b7 0%, #74756d 100%);
    height: 25vh;
    width: 100vw;
    background-image: ${backgroundImage};
    /* margin-right: none; */
  `;

  const ProfileImage = styled.div`
    border-radius: 100px;
    border-width: 3em;
    /* border: 2px solid; */
    /* border-color: black; */
    background-color: #efdecd;
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
    height: 42vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const Flexend = styled.div`
    height: 10vh;
    display: flex;
    align-items: flex-end;
  `;
  const BoxShadowInput = styled.input`
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    background-color: #f7fffb;
    outline: none;
    width: 75vw;
    max-width:332px;

  `;
  const Paragraph = styled.h3`
    margin: 0px, 0px;
  `;
  return (
    <Page className="page">
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
            <BackgroundImage>
              <Flex>
                <ProfileImage></ProfileImage>
              </Flex>
            </BackgroundImage>
            <h2>User Profile Page</h2>
            <SpaceAround>
              <div>
                <Paragraph>Username</Paragraph>
                <BoxShadowInput
                  value={username}
                  placeholder=" johnsmith123"
                ></BoxShadowInput>
              </div>
              <div>
                <Paragraph>Email</Paragraph>
                <BoxShadowInput
                  value={email}
                  placeholder="john@email.com"
                ></BoxShadowInput>
              </div>
              <div>
                <Paragraph>Password</Paragraph>
                <BoxShadowInput
                  value={password}
                  placeholder="Minimum of 8 characters"
                ></BoxShadowInput>
              </div>
              <div>
                <Paragraph>Contact</Paragraph>
                <BoxShadowInput
                  value={contact}
                  placeholder="019-880 8800"
                ></BoxShadowInput>
              </div>
            </SpaceAround>
            <Flexend>
              <Button onClick={handleUpdate}>Update profile</Button>
            </Flexend>
        </>
      )}
    </Page>
  );
};

export default Profile;
