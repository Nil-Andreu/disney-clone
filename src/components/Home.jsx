import React from 'react'
import styled from 'styled-components';

// The image slider is going to be in another file component
import ImgSlider from './ImgSlider.jsx';


function Home() {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

/**The main is like a div but tells google here is the main content */
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);

    // Position relative to be able to position absolutely the after relative to this container
    position: relative;

    &:before {
        content: "";

        // For the background gonna have an image which is centered horizontally and vertically, that covers all with no repeat of itself. 
        // And that is gonna be fixed whenever if the user scrolls
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        
        //The position that is going to have is absolute relative to the main Container
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        // As we want this background to be below the content of the page
        z-index: -1;
    }
`;


/**Gonna export this component to be able to import it in a different file */
export default Home;


