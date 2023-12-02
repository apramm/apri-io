import React from 'react'
import styled from 'styled-components'
import App from './Map'

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
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
    justify-content: flex-end;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Input = styled.input`
    padding:20px;
    background-color: #e2dddd;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
     padding:20px;
     border: none;
     background-color: #e2dddd;
     border-radius: 5px;
`;

const Button = styled.button`
     background-color: #74cce9;
     color: white;
     border: none;
     font-weight: bold;
     cursor: pointer;
     border-radius: 5px;
     padding: 20px;
     &:hover {
            color: black;
        }
`;


const Right = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content: center;
`;



const Contact = () => {
  return (
    <Section id = {4}>
      <Container>
        <Left>
            <Form>
                <Title>Get in Touch </Title>
                <Input placeholder='Name'/>
                <Input placeholder='Email'/>
                <TextArea placeholder='Write your Message' rows={12}/>
                <Button>Send</Button>
            </Form>
        </Left>

        <Right><App/></Right>
      </Container>

    </Section>
  )
}

export default Contact