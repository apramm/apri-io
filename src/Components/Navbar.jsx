import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
        display:flex;
        justify-content:center;
        margin: 0 auto;
        position: sticky;
        top: 0;
        z-index: 3;
`;

const Container = styled.div`
        width:1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
`;

const Links = styled.div`
        display: flex;
        align-items: center;
        gap: 150px;      
`;

const Logo = styled.img`  
        height: 100px;
`;

const List = styled.ul` 
        display: flex;
        gap: 69px;
        list-style: none;
`;

const fontsize = {
    H3FONTSIZE: '20px',
  }

const ListItem = styled.li`
        cursor: pointer;
        font-size: ${fontsize.H3FONTSIZE}; 
        font-weight: 150; 
        &:hover {
            color: lightblue;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid lightblue;
        }
`;

const Icons = styled.div`  
        display: flex;
        align-items: center;
        gap: 50px;      
`;

const Icon = styled.img`
         width: 20px;
         cursor: pointer;       
`;
const Link = styled.a`
    &:link, &:active, &:focus, &:visited{
        text-decoration:none;
        color: white}
    &:hover{
        color: lightblue;
    }
`;
const Button = styled.button` 
    width: 100px;
    padding: 10px;
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    background-color: rgb(106, 193, 239);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
            color: greenyellow;
        }

`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src= "./img/logo-2.png"/>
            <List>
                <ListItem><Link href = "#1">Home</Link></ListItem>
                <ListItem><Link href = "#2">Projects</Link></ListItem>
                <ListItem><Link href = "#3">Studio</Link></ListItem>

            </List>
            </Links>
            <Icons>
                <Icon src = "./img/search.png"/>
                <Button><Link href = "#4">contact</Link></Button>

            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar