/**We are going to use the styled components */
import styled from 'styled-components'

import React from 'react'

/**Here we define the general component (header in this case) */
function Header() {
    return (
        <div>
            <Nav>
                <Logo src="/images/logo.svg" />
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
                <UserImg src="images/profile.jfif"/>
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
`;

/**When we need to import an image, this image directory by default is the public */
const Logo = styled.img`
    width: 80px;
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


