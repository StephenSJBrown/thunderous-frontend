import styled from 'styled-components'


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
color: #494949;
`;
const Paragraph = styled.h3`
margin: 0px, 0px;
`;

export { Flex, SpaceAround, Flexend, BoxShadowInput, Paragraph}