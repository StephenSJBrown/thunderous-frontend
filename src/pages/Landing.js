import React from "react";
import {Link} from "react-router-dom";
import Page from "../components/Page";
import Logo from "../icons/recycloLogo.svg"
import GoogleIcon from "../icons/googleicon.svg"

const headerStyle={
    textAlign:'center'
}

const tittleStyle={
    textAlign:'center'
}

const divStyle={
    textAlign:'center',
    marginTop:'50px'
}

const footerStyle={
    // backgroundColor:'red',
    width:'100vw',
    display:'flex',
    marginTop:'80px',
    justifyContent:'space-around'

}

const buttonStyle={
    width: '332px',
    height: '48px',
    backgroundColor:'#B0E6CE',
    border:'none',
    borderRadius:'44px',
    fontSize:'20px',
    color:'#494949'
}


const Landing = () => {
    return (
    <>
        <header style={headerStyle}>
            <img src={Logo}/>
        </header>
        <div style={tittleStyle}>
            <h1>
                Welcome to <br/> RECYCLO
            </h1>
        </div>
        <div style={divStyle}>
            <Link to="/centres">
                <button style={buttonStyle}>Sign up</button><br/>
            </Link>
            <p style={{marginTop:'30px'}}>or</p><br/>
            <button style={buttonStyle}>Log in</button><br/>
            {/* <button style={{marginTop:'20px'}}><img src={GoogleIcon}/></button> */}
        </div>
        <footer style={footerStyle}>
            <a href="">T&C's</a>
            {/* <a href="">About</a>  */}
        </footer>
    </>
    )
}

export default Landing