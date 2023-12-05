import React from 'react'
import styled from 'styled-components'
import App from './Map'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`;


const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    gap:10px;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 90px;
    color:lightgray;
`;

const SubTitle = styled.p`
      font-size:35px;
      color:grey;
`;
const P = styled.a`
      font-size:35px;
      color:lightblue;
      &:link, &:active, &:focus, &:visited{
        text-decoration:none;
        color: lightblue}
        &:hover{
        color: black;
    }

`;
const Github  = styled(FaGithub)`
  color: white;
  transform: scale(2);
  margin: 5%;
  &:hover{
        color: lightblue;
    }
`;

const LinkedIn  = styled(FaLinkedin)`
  color: white;
  transform: scale(2);
  margin: 5%;
  &:hover{
        color: lightblue;
    }
`;
const Mail  = styled(FaMailBulk)`
  color: white;
  transform: scale(2);
  margin: 5%;
  &:hover{
        color: lightblue;
    }
`;

const Div = styled.div`
      display:flex;
      flex-direction:row;
      margin-top: 50px;
      gap: 60px;
      `;


const Right = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-top:6rem;
`;



const Contact = () => {
  return (
    <Section id = {4}>
      <Container>
        <Left>
            <Title>Get in Touch 
            
            </Title>

            <SubTitle>I would be happy to connect with you, simply shoot me an email or message me on my socials!</SubTitle>  

            <P href = "mailto:apri@student.ubc.ca">apri@student.ubc.ca</P>    
            <Div>
            <P href = "https://github.com/apramm"><Github /></P>
            <P href = "https://www.linkedin.com/in/apram/"><LinkedIn /></P>
            <P href = "mailto:apri@student.ubc.ca"><Mail/></P> 
            </Div>
          </Left>


        <Right><App/></Right>
      </Container>

    </Section>
  )
}

export default Contact