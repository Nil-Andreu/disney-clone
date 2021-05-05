import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=""/>
            </Background>
            
            <ImgTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt=""/>
            </ImgTitle>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);

    // When we use position fixed or absolute for a children, we need a relative for the parent
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;

    // And the header must show
    z-index: -1;

    img {
        width: 100vw;
        height: 100vw;

        //And the image for covering it correctly
        object-fit: cover;
    }
`;

const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    
    img {
        // Now the % will be relative to the parent
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default Detail
