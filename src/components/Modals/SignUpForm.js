import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Logo from '../../icons/RecycloLogo.png'

const modalstyle={
    textAlign:'center'
}

const headerstyle={
    // textAlign:'center',
    fontSize:'34px'
}

const labelstyle={
    // textAlign:'center',
    fontSize:'25px',
    marginTop:'20px'
}

const inputstyle={
    border: 'none',
    borderBottom: '1px solid #494949',
    backgroundColor:'#F7FFFB',
    width:'160px',
    fontSize:'15'
}

const signupbuttonstyle={
    borderRadius: '44px', 
    border: 'none',
    width: '332px',
    height: '48px',
    backgroundColor: '#B0E6CE',
    marginTop: '30px',
    fontSize: '20px',
    fontFamily: '"Dosis", sans-serif',
    color: '#494949'
}

const footerstyle={
    marginTop:'100px'
}

const SignUpForm = ({ modal, toggle, isLoginForm, setIsLogInForm, text, setText, password, setPassword, setLoggedIn, loggedIn }) => {
    // 1. Code out your Log In and Sign Up as Controlled Form

    // Login form should contain username and password field.

    // Signup form should contain username, email, password and confirm password field

    // When either form is submitted, console.log the provided username, email and password, then close the modal.

    // 2. Form validation

    // Disable the submit button when one of the fields is empty

    const [delay, setDelay] = useState(null);
    const [usernameValid, setUsernameValid] = useState(false);
    const [verifyPassword, setVerifyPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleDelay = (e, callback) => {
        let x = { ...e };
        let newDelay = setTimeout(() => handleInput(x), 300);
        callback(e.target.value);
        setDelay(newDelay);
    };

    const handleInput = e => {
        setText(e.target.value)
        // Check if username
        // if (e.target.value.length >= 6) {
        //     axios
        //         .get(
        //             `https://insta.nextacademy.com/api/v1/users/check_name?username=${e.target.value}`
        //         )
        //         .then(response => {
        //             if (response.data.valid) {
        //                 setUsernameValid(true);
        //             } else {
        //                 setUsernameValid(false);
        //             }
        //         });
        // }
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleVerifyPassword = (e) => {
        setVerifyPassword(e.target.value)
    }

    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const emailIsInvalid = () => {
        return (
            !(emailRegex.test(email)))
    }

    const passwordIsInvalid = () => {
        if (password.length && password.length < 8) {
            return 'Password must be at least 8 characters'
        } else {
            return false
        }
    }

    const verifyPasswordIsInvalid = () => {
        if (verifyPassword.length && verifyPassword === password) {
            return true
        } else {
            return false
        }
    }

    const isDisabled = () => {
        return (text === '' || email === '' || password === '' || verifyPassword === '')
    }

    const signUp = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/',
            data: {
                username: text,
                email: email,
                password: password,
                cfm_pwd: verifyPassword
            }
        })
            .then(response => {
                console.log(response)
                toast.success(`Welcome to Nextagram, ${text}`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                toggle()
                localStorage.setItem('jwt', response.data.new_user.id)
                setLoggedIn(true)
                useHistory.push('/profile')
            })
            .catch(error => {
                console.error(error) // so that we know what went wrong if the request failed
                toast.error(`IT went wrong`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            )
    }

    return (
        <>
            <Modal style={modalstyle} isOpen={modal} toggle={toggle}>
                <ModalHeader style={headerstyle} toggle={toggle}>Sign Up <img src={Logo}/></ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label style={labelstyle} >Username</Label><br/>
                        <Input style={inputstyle} type="text"
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
                                    : "")} />
                        <FormFeedback
                            {...(text.length > 0 && text.length >= 6
                                ? usernameValid
                                    ? { valid: true }
                                    : { invalid: true }
                                : { invalid: true })}
                        >
                            {text.length >= 6
                                ? usernameValid
                                    ? "Sweet, this username is available!"
                                    : "Sorry, this username is taken!"
                                : "Must be minimum 6 characters"}
                        </FormFeedback>
                        <Label style={labelstyle}>Email</Label><br/>
                        <Input style={inputstyle} type="email"
                            value={email}
                            autoFocus
                            {...(email.length > 5
                                ? emailIsInvalid()
                                    ? { invalid: true }
                                    : { valid: true }
                                : { invalid: null })
                            }
                            onChange={handleEmail}
                        />
                        <FormFeedback
                            {...(email.length > 5
                                ? emailIsInvalid()
                                    ? { invalid: true }
                                    : { valid: true }
                                : { invalid: null })
                            }
                        >
                            {email
                                ? emailIsInvalid()
                                    ? "Emails should contain @ and none of that other fancy stuff"
                                    : "That's a solid email, friend"
                                : ""}
                        </FormFeedback>
                        <Label style={labelstyle}>Password</Label><br/>
                        <Input style={inputstyle} type="password" value={password} onChange={handlePassword}
                            {
                            ...password.length > 0
                                ? passwordIsInvalid()
                                    ? { invalid: true }
                                    : { valid: true }
                                : { invalid: null }
                            }
                        />
                        <FormFeedback {...passwordIsInvalid()
                            ? { invalid: true }
                            : { valid: true }}>
                            {passwordIsInvalid() ? passwordIsInvalid() : ''}
                        </FormFeedback>
                        <Label style={labelstyle}>Retype Password</Label><br/>
                        <Input style={inputstyle} type="password" value={verifyPassword} onChange={handleVerifyPassword}
                            {
                            ...(verifyPassword.length > 8
                                ? verifyPasswordIsInvalid()
                                    ? { valid: true }
                                    : { invalid: true }
                                : { invalid: null })
                            } />
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
                    </FormGroup>
                    <Button style={signupbuttonstyle} color="primary" disabled={isDisabled()} onClick={signUp} >Sign Up</Button><br/>
                    <p style={{marginTop:'35px'}}>or</p>
                    <Button style={signupbuttonstyle} color="primary" disabled={isDisabled()} onClick={signUp} >Sign Up</Button>
                </ModalBody>
                <ModalFooter style={footerstyle}>
                     <p style={{fontSize:'15px'}}>Already a member? <Button style={{fontSize:'15px'}} color="link" onClick={() => setIsLogInForm(!isLoginForm)}>Log In</Button><br/></p>
                        <Button style={{fontSize:'15px'}}>T&CS</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default SignUpForm

