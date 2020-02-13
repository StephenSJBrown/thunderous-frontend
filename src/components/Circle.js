import styled from 'styled-components'

const Circle = styled.div`
border-radius: 50%;
background-color: ${props => props.inputColor || "grey"};
height: 165px;
width: 165px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export default Circle