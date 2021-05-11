import React, {useEffect} from 'react';  
import styled from 'styled-components';

// The image slider is going to be in another file component
import ImgSlider from './ImgSlider.jsx';

import Viewers from './Viewers.jsx';
import Movies from './Movies.jsx';

import db from '../firebase';

function Home() {
    //This useFefect is going to do whenever this component is loaded
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                // console.log(doc.data()); To see how data is collected
                return { id: doc.id, ...doc.data()} //Return an object with the brackets, saving the id so we can do then the detail page
            }) //The .map will loop for every single doc (how the data is sent) in spanshot --> consoleg.log(snapshot)
        }) //We are going to collect the category "movies" inside my db, and to do a snapshot (take a picture of what inside) --> and when this picture changes, it will send you a new one
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

/**The main is like a div but tells google here is the main content */
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);

    // We use the overflow hidden for the slider only to appear in the screen --> same we will do in header
    overflow-x: hidden;

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


