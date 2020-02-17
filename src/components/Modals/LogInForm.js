import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Logo from '../../icons/RecycloLogo.png'

import Button from '../../components/Button'


const modalStyle={
    backgroundColor:'#f7fffb',
    color:'#494949'
}

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


const LogInForm = ({ modal, toggle, isLoginForm, setIsLogInForm, text, setText, password, setPassword, setLoggedIn }) => {

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
        <Modal style={modalStyle} isOpen={modal} toggle={toggle}>
            <ModalHeader style={headerstyle} toggle={toggle}>Log In <img alt="" src={Logo}/></ModalHeader>
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
                    <Button color="link" onClick={logIn} disabled={isDisabled()}>Log In</Button><br/>
                    <p style={{ marginTop:'20px'}}>or</p><br/>    
                    <Button color="link" onClick={logIn} disabled={isDisabled()}>Log in with Google</Button>            
                </div>

            </ModalBody>
            <ModalFooter style={footerstyle}>
                <p>Don't have an account? <span onClick={() => setIsLogInForm(!isLoginForm)}>Sign Up</span></p><br/>
                {/* <Button>T&CS</Button> */}
                <a href="">T&C's</a>
            </ModalFooter>
        </Modal>
    )
}

export default LogInForm