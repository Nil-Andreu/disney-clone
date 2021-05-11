import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'; //We have passed the id as the parameter

import db from "../firebase"

function Detail() {
    const {id} = useParams(); //Grabbing the id
    const [movie, setMovie] = useState() //The usestate is like redux but for individual components

    //And now we will grab the data from this id
    useEffect(() => {
        // Grab the movie info from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                //Save the movie data in state, not in redux as is not going to be used in not any more component in page
                setMovie(doc.data());
            }
            else {
                //redirect to home page

            }
        }) //Check if exist, the moview is found
    }, [id]) //The empty brakets is for loading it whenever the copmonent is rendered

    // And now populate the UI when the movie is already loaded from the database (so movie is true), as it can take some milliseconds
    return (
        <Container>
            {movie && (
            <>
                <Background>
                    <img src={movie.backgroundImg} alt=""/>
                </Background>
            
                <ImgTitle>
                    <img src={movie.titleImg} alt=""/>
                </ImgTitle>

                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt=""/>
                    </GroupWatchButton>
                </Controls>

                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
            </>
            )}
        </Container>
    )
};

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
        height: 100vh;

        //And the image for covering it correctly
        object-fit: cover;
    }
`;

const ImgTitle = styled.div`
    margin-top: 40px;
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

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(240, 249, 249);
    border: none;
    padding: 0 24px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rba(198, 198, 198);
    }
`;

//We are gong to import the play button as the styles are the same except background color
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0,0,0, 0.6);
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
    cursor: pointer;
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    width: 40vw;
    min-width: 300px;
    color: rgb(249, 249, 249);
`;

export default Detail
