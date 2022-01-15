import styled, { css } from 'styled-components'


const Container = styled.div`
    min-height: 100vh;
    width: 500px;
    margin: 50px auto;

    color:white;
    font-size: xx-large;
    letter-spacing: 0.1em;
    text-transform:uppercase;
`

const Text = "That it will never come again is what makes life sweet."

function randomizer(text) {
    return ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']
}

function Crypto() {
    return (
        <Container>
            {randomizer(Text)}
        </Container>
    );
  }
  
  export default Crypto;