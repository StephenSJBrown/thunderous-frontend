import React, { useState, useEffect } from "react";

import axios from 'axios'
import {toast} from 'react-toastify'


import LoadingIndicator from "../components/LoadingIndicator";

const Profile = () => {
   const id = localStorage.getItem("jwt");

  const [isLoading, setIsLoading] = useState(true);

  const [username ,setUsername] = useState('')
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [contact ,setContact] = useState('')
  const [profileImage ,setProfileImage] = useState('')
  const [backgroundImage ,setBackgroundImage] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${id}`)
      .then(result => {
        console.log(result.data);
        const {username, email, contact, profileImage, backgroundImage} = result.data
        setUsername(username)
        setEmail(email)
        setContact(contact)
        setContact(contact)
        setProfileImage(profileImage)
        setBackgroundImage(backgroundImage)
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
          })
        setIsLoading(false);
      });
  }, []);

  const handleUpdate = () => {
    setIsLoading(true)
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
        })
        setIsLoading(false)
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
        })
        setIsLoading(false)
      });
  };

  return (
    <>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <img src={backgroundImage} alt="user background"></img>
          <img src={profileImage} alt="user avatar"></img>
          <h1>User Profile Page</h1>
          <input value={username}></input>
          <input value={email}></input>
          <input value={password}></input>
          <input value={contact}></input>
          <button onClick={handleUpdate}>Update profile</button>
        </>
      )}
    </>
  );
};

export default Profile;
