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
    const a1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const a2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    a2.sort(() => Math.random() - 0.5);

    return a2;
}



function Crypto() {
    return (
        <Container>
            {randomizer(Text)}
        </Container>
    );
  }
  
  export default Crypto;