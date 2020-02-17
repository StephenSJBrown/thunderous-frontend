import styled from 'styled-components'   
    
const Button = styled.button`
display: block;
border-radius: 44px; 
border: none;
width: 75vw;
max-width: 332px;
height: 48px;
background-color: #B0E6CE;
margin: 10px auto;
font-size: 20px;
color: #494949;
cursor: pointer;
transition: 500ms;

&:disabled {
    background-color: #C4C4C4;
    cursor: default;
}
`

export default Button