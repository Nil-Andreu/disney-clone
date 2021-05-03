import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""/>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;

    //The columns that going to have are 5, and the width of them
    // are going to be minmax from 0 to as much as possible (1fr)
    grid-template-columns: repeat(5, minmax(0, 1fr));
    
    // For the gap between each grid item
    grid-gap: 25px; 
`;

const Wrap = styled.div`
    cursor: pointer;

    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border-radius: 10px;

    // Gonna add very light border
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        // Say the image will take 100% of it's container width (the column of grid)
        width: 100%;
        height: 100%;

        // Going to say the object to cover as much as possible
        object-fit: cover;
    }

    // We transition everything (all)
    // The 250ms is the perfect number, not too slow or fast. That's why is used by a lot of developers
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    //Remember the & concatenates the hover with the wrap
    &:hover {
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default Viewers;
