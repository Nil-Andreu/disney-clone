/**We are going to use the styled components */
import styled from 'styled-components'
import React, {useEffect} from 'react'

import {provider, auth} from '../firebase'
import {useHistory} from 'react-router-dom'; //For redirecting the user when log out

//For user registration
import {selectUserName, selectUserPhoto, setSignOut, setUserLogin} from '../features/user/userSlice.jsx'
import {useSelector, useDispatch} from 'react-redux' 

/**Here we define the general component (header in this case) */
function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const history = useHistory();

    // The state would disappear when the page is refreshed, so for this reason i use this
    useEffect (() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName, 
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        }) //As firebase remembers the user due to cookies
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider) //We are going to sign in with a popup from the google provider
        .then((result) => {
            let user = result.user //Where user is one of th efields obtained in the result

            // console.log(result) This result hasa lot of information, including name, email, photoURL, ...
            dispatch(setUserLogin({
                name: user.displayName, //Where displayName is where the name is stored inside of the user
                email: user.email,
                photo: user.photoURL
            })) //And now dispatch the setuserlogin with the data obtained
            history.push("/")
        }) //Then when us signed in
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push("/login") //Te redirecto to the login
        })
    }

    return (
        <div>
            <Nav>
                <Logo src="/images/logo.svg" />
                {!userName ? 
                    (<LoginContainer>
                        <Login onClick={signIn}>
                            Login
                        </Login>
                    </LoginContainer>) 
                    : 
                    ( <>
                        <NavMenu>
                            <Item>
                                <Img src="/images/home-icon.svg" />
                                <Span>HELLO</Span>
                            </Item>
                            <Item>
                                <Img src="/images/search-icon.svg" />
                                <Span>SEARCH</Span>
                            </Item>
                            <Item>
                                <Img src="/images/watchlist-icon.svg" />
                                <Span>WATCHLIST</Span>
                            </Item>
                            <Item>
                                <Img src="/images/original-icon.svg" />
                                <Span>ORIGINALS</Span>
                            </Item>
                            <Item>
                                <Img src="/images/movie-icon.svg" />
                                <Span>MOVIES</Span>
                            </Item>
                            <Item>
                                <Img src="/images/series-icon.svg" />
                                <Span>SERIES</Span>
                            </Item>
                        </NavMenu>
                        <UserImg onClick = {signOut} src={userPhoto}/>
                    </>)
                }
            </Nav>
        </div>
    )
}

/**We define each part of the navbar */
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

    // We are going to make overflow hidden, to hide what does not enter in the screen (due to slider) 
    overflow-x: hidden;
`;

/**When we need to import an image, this image directory by default is the public */
const Logo = styled.img`
    width: 80px;
`;

const LoginContainer = styled.div`
    flex: 1; // This will stretch the whole div
    display: flex;
    justify-content: flex-end;
`;


// In the part of code where we define the login says that if the user.name is undefined, render login. If is true, render normal
const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;


    &:hover {
        color: black;
        background: #f9f9f9; 
        border-color: transparent; //To do not appear this border color

    }

`;

/**The flex:1 allows us to push the profile image to the full left,
 * as which is saying is that the nav menu is the most important thing
 */
const NavMenu = styled.ul`
    display: flex;
    flex: 1;
    margin-left: 30px;
    align-items: center;
`;

const Item = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
`;

const Img = styled.img`
    height: 20px;
`;

/**This styled components has some properties as the sass.
 * The ::after creates like a div aftet the span. This will be used for the animation of
 * each span element of inferior line
*/
const Span = styled.span`
    font-size: 13px;
    padding-left: 5px;
    letter-spacing: 1.42px;

    // We make the position relative here to be able to position absolute then
    position: relative;

    &:after {
        content: "";
        height: 1.5px;
        background: white;

        //The position is absolute relatively to span
        position: absolute;

        //We give no space to the left no right so this way it occupies all the span
        left: -15px;
        right: 0;

        // Push this div down the span component
        bottom: -5px;

        // We put an opacity of 0 so it does not appear initially
        opacity: 0;

        // And the transformation from left to the center
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover{
        &:after {
            opacity: 1;
            transform:scalex(1);
        }
    }
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;


export default Header;

/**When we select a word and put Command+D, gonna select all the same words in the file.
 * This is useful when changing a name to a variable.
 * 
 * Another functionality is that we can Control+Click in a name of the component
 * and will show us where the same variable is created in the page (useful when creating the styles)
 */

/**In styled components i can also have nested styles as in sass
 * So if i have in NavMenu differenr anchor tags, i could:
 *  const Navmenu...
 *      a {
 *          
 *      }
 *  `
 */


