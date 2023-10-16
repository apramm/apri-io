import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align:center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
    flex:2;
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap:10px;
`;

const Title = styled.h1`
      margin-top: 6rem;
      margin-bottom: 1rem;
      color: lightgray;
      font-size: 74px;
`;
const Color = styled.div`
      font-size: 74px;
      color:rgb(106, 193, 239);
`;

const WhatWeDo = styled.h1`
      align-items: center;
      gap: 15px;
`;

const Line = styled.img`
      height: 5px;
`;

const SubTitle = styled.h2`
      font-size: 20px;
      color: pink;

`;

const Desc = styled.p`
      font-size:35px;
      color:lightgrey;
`;


const Button = styled.button` 
    width: 100px;
    padding: 10px;
    font-weight: bolder;
    background-color: rgb(106, 193, 239);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
            color: pink;
        }

`;

const Link = styled.a`
    &:link, &:active, &:focus, &:visited{
        text-decoration:none;
        color: white}
    &:hover{
        color: lightblue;
    }
`;

const Right = styled.div`
    display: flex;
    flex:3;
    position: relative;
    
`;
const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
      to{
        transform: translateY(30px);
      }
    }
`;



const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title id  = {1}> Hello, I'm 
            <Color>Apram Ahuja</Color> </Title>

             <WhatWeDo>
              <Line src = "./img/line.png"/>
              <SubTitle>Junior @UBC Mathematics & Data Science</SubTitle>
              <Line src = "./img/line.png"/>
             </WhatWeDo>
             <Desc>A Mathematics student from Canada. I aim to deepen my understanding in various areas of technology and product development.</Desc>
             <Button><Link href = "./resume.pdf" target = "_blank">RESUME</Link></Button>
        </Left>

        <Right>
          {/* 3d model */}
          <Img src ="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero