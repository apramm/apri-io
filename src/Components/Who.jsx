import React from 'react'
import styled from 'styled-components'


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
  /* align-items: center; 
  text-align: center; */
`;

const PostTitle = styled.h3`
    font-family: bold;
    margin: 0.5rem 0;
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


const Who = () => {
  return (
    <Section>
      <Title id = {2}> PROJECTS </Title>
      <Wrapper>
      <Project>
         <Link href = "https://www.students.cs.ubc.ca/~bkosch04/new-deliverable.php" target = "_blank"> <Img src ="./img/zoo.png"/> </Link>
            <PostTitle>Zoo Management System</PostTitle>
            <PostIntro>Queries over Zoo's data using SQL and PHP <Link href = "https://github.com/apramm/ZooManagementSystem" target = "_blank">@styled-icons/boxicons-logos/Github</Link></PostIntro>
      </Project>
      <Project><Img src ="./img/obs.png"/></Project>
      <Project><Img src ="./img/asa.png"/></Project>
      <Project><Img src ="./img/football.png"/></Project>
      </Wrapper>
      <ButtonContainer><Button>See More</Button></ButtonContainer>
      

      
    </Section>
  )
}

export default Who