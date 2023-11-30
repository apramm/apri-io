import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";


const Section = styled.div`
height: 100vh;
width: 1400px;
scroll-snap-align:center;
flex-direction: column;
display: flex;
margin: 0 auto;
overflow: auto;
`;

const Title = styled.h1`
      margin-top: 6rem;
      margin-left: 10rem;
      margin-bottom: 5rem;
      font-size: 90px;
      color:lightgray;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;

`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center; 
  text-align: center; 
`;

const PostTitle = styled.h3`
    font-family: bold;
    margin: 0.6rem 0;
`;

const PostIntro = styled.p`
    margin: 0.5rem 0;
`;

const Link = styled.a`
    &:link, &:active, &:focus, &:visited{
        text-decoration:none;
        color: white}
    &:hover{
        color: lightblue;
    }
`;

const Img = styled.img`
    object-fit:cover;
    display: block;
    height: 300px;
    width: 100%;
    margin: 1rem; 
    &:hover {
            animation: animate 2s infinite ease alternate;
            
        }

    @keyframes animate{
      to{
        transform: translateY(-20px);
      }
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    align-items: center; 
    text-align: center;
    font-weight: bolder;
    background-color: rgb(106, 193, 239);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
            color: green;
        }

`;

const Github  = styled(FaGithub)`
  color: white;
  transform: scale(2);
  margin: 5%;
`;



const Who = () => {
  return (
    <Section>
      <Title id = {2}> PROJECTS </Title>
      <Wrapper>
      <Project>
         <Link href = "https://www.students.cs.ubc.ca/~bkosch04/new-deliverable.php" target = "_blank"> <Img src ={`${process.env.PUBLIC_URL}/img/zoo.png`}/> </Link>
            <PostTitle>Zoo Management System</PostTitle>
            <PostIntro>PHP Dashboard that queries and displays Zoo data in realtime using Oracle SQL </PostIntro> <Link href = "https://github.com/apramm/ZooManagementSystem" target = "_blank"> <Github /></Link>
      </Project>

      <Project>
      <Link href = "https://github.com/apramm/OnlineBankingSystem" target = "_blank"> <Img src ={`${process.env.PUBLIC_URL}/img/obs.png`}/> </Link>
            <PostTitle> Online Banking System</PostTitle>
            <PostIntro>Java Desktop Application performing transactions for users using JSON</PostIntro> <Link href = "https://github.com/apramm/OnlineBankingSystem" target = "_blank"> <Github /></Link>
      </Project>

      <Project>
      <Link href = "https://github.com/apramm/ASADatafest" target = "_blank"><Img src ={`${process.env.PUBLIC_URL}/img/asa.png`}/></Link>
      <PostTitle> Pro Bono Services Consultancy</PostTitle>
            <PostIntro>Consulted American Bar Association for Pro-bono serivces using Time Series and NLP tools like BERTopic </PostIntro> <Link href = "https://github.com/apramm/ASADatafest" target = "_blank"> <Github /></Link>
      </Project>

      <Project>
      <Link href = "https://github.com/jycxu99/group_27_project" target = "_blank"><Img src ={`${process.env.PUBLIC_URL}/img/football.png`}/></Link>
      <PostTitle>Prediction Model for Life Expectancy of Nations</PostTitle> 
      <PostIntro>Fitted KNN Regressor on over 3500 observations using TidyVerse in R</PostIntro><Link href = "https://github.com/jycxu99/group_27_project" target = "_blank"> <Github /></Link>
      </Project>
      </Wrapper>
      <ButtonContainer><Button><Link href = "https://github.com/apramm" target = "_blank">See More</Link></Button></ButtonContainer>
    </Section>
  )
}

export default Who