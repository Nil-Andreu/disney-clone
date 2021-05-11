import {createSlice} from "@reduxjs/toolkit"

//**When using redux, with the initial state */
const initialState = {
    movies: [],
}

const movieSlice = createSlice({
    name: "movie", //The name of the reducer
    initialState, //Takes the initial state of the app

    //Where we take the current state and the action
    reducers: {
        setMovies: (state, action) => { 
            state.movies = action.payload;
        }
    }
    // To the state we pass the nwe movies we get from the db. What action payload does is taking actual parameter passed in setmovies function
})

//Exporting the action
export const { setMovies } = movieSlice.actions;

//Exporting the state
export const selectMovies = (state) => state.movie.movies //The name is the select + what do you select (movies in this case). And the .movie is the name of the reduces, and the .movies is the state.movies, as state is the component itself

//Exporting the reducer
export default movieSlice.reducer; //Export the reducer, which will be imported in app store.js

/**Redux is made upon different things.
 * - Actions: what you want to do. You dispatch an action which call a reducer
 * - Reducers: the reduces change the state
 * - State: and with the change of state the whole app knows about it, so this makes it very powerful so you do not have to handle it on each component which is costly
 * - Suggers (was previous redux)
*/