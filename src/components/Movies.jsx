import React from 'react'
import styled from 'styled-components';

import {Link} from 'react-router-dom'; //This link what does is surronunding an object with an a tag

import {selectMovies} from '../features/movie/movieSlice'; //Select movies will gives us the movies state from the database
import {useSelector} from 'react-redux'

function Movies() {
    // Now we are going to grap those movies, which we grap them from the whole state of home component (in use effect)
    // As those movies are sotred using the dispatch
    const movies = useSelector(selectMovies);
    // console.log(movies) To see that movies is passed to thie child component

    return (
        <Container>
            <Heading>Recommended for You</Heading>
            <Content>

                {movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} alt=""/>
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

// Where in the return, we say taht if they are movies &&, then map (for loop) those for each movie
// WE put in the wrap a key, as firebase tracks all those components and they need to have a unique identifier 
// The link will link us to the detail page, for the movie id

const Container = styled.div`
    
`;

const Heading = styled.h4``;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        width: 100%;
        height: 100%;

        // To cover the image within the div
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 38px -16px,
            rba(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;

export default Movies
