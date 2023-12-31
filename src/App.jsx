import styled from 'styled-components'
import Hero from './Components/Hero'
import Who from './Components/Who'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

const Container = styled.div`
        height: 100vh;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-y:auto;
        scrollbar-width:none;
        color: white;
        background : url("${process.env.PUBLIC_URL}/img/bg.jpeg");
        &::-webkit-scrollbar{
          display: none;
        }
`;

function App() {
  return (
    <Container>
      <Navbar/>
      <Hero/>
      <Who/>
      {/* <Works/> */}
      <Contact/>
    </Container>
  );
}

export default App;