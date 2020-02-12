import React from 'react'
import { Button,Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import styled from 'styled-components'





const headerstyle={
    textAlign: 'center',
    fontSize: '40px',
    color:'#494949'
}

const formstyle={
    textAlign: 'center'
}

const footerstyle={
    textAlign: 'center',
    marginTop:'100px'
}

const labelstyle={
    fontSize:'25px',

}

const inputstyle={
    border: 'none',
    borderBottom: '1px solid #494949',
    backgroundColor:'#F7FFFB',
    width:'200px'
}

const buttondivstyle={
    marginTop: '30px',
    textAlign: 'center'
}

const buttonstyle={
    borderRadius: '44px', 
    border: 'none',
    width: '332px',
    height: '48px',
    backgroundColor: '#B0E6CE',
    marginTop: '10px',
    fontSize: '20px',
    fontFamily: '"Dosis", sans-serif',
    color: '#494949'
}

const LogInForm = ({ modal, toggle, isLoginForm, setIsLogInForm, text, setText, password, setPassword, setLoggedIn }) => {

    const history = useHistory()

    const handleInput = e => {
        setText(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const isDisabled = () => {
        return (text === '' || password === '')
    }

    const logIn = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/login',
            data: {
                username: text,
                password: password
            }
        })
            .then(response => {
                console.log(response)
                toast.success(`Welcome back, ${text}`, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                toggle()
                localStorage.setItem('jwt', response.data.user.id)
                setLoggedIn(true)
                // history.push('/profile')
            })
            .catch(error => {
                console.error(`Error: ${error}`) // so that we know what went wrong if the request failed
                toast.error(`Something went wrong`, {
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
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader style={headerstyle} toggle={toggle}>Log In</ModalHeader>
            <ModalBody>
                <FormGroup style={formstyle}>
                    <Label style={labelstyle}>Username</Label><br/>
                    <Input style={inputstyle} className="bg-transparent" type="text" autoFocus onChange={handleInput} value={text} />
                    <FormFeedback></FormFeedback>
                    <Label style={labelstyle}>Password</Label><br/>
                    <Input style={inputstyle} type="password" onChange={handlePassword} value={password} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <div style={buttondivstyle}>
                    <Button style={buttonstyle} color="link" onClick={() => setIsLogInForm(!isLoginForm)}>Log In</Button><br/>
                    <p style={{ marginTop:'35px'}}>or</p><br/>                
                    <Button style={buttonstyle} color="link" onClick={() => setIsLogInForm(!isLoginForm)}>Log in with Google</Button>
                </div>

            </ModalBody>
            <ModalFooter style={footerstyle}>
                <p>Don't have an account?</p><br/>
                <link></link>
            </ModalFooter>
        </Modal>
    )
}

export default LogInForm