import React from 'react'
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <Heading>Recommended for You</Heading>
            <Content>
                <Wrap>
                    <img src="images/disney-simpson.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="" />
                </Wrap>
                <Wrap>
                    <img src="" />
                </Wrap>
                <Wrap>
                    <img src="" />
                </Wrap>
                <Wrap>
                    <img src="" />
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    
`;

const Heading = styled.h4``;

const Content = styled.div`
    display: grid;
    grid-gap: 
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`

    img {
        width: 400px;
        height: auto;
    }
`;

export default Movies
