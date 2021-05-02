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

const NavMenu = styled.ul`
    display: flex;
`;

const Item = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
`;

const Img = styled.img`
    height: 20px;
`;

const Span = styled.span`
    font-size: 13px;
    letter-spacing: 1.42px;
`;

const UserImg = styled.img`

`;


export default Header;

/**When we select a word and put Command+D, gonna select all the same words in the file.
 * This is useful when changing a name to a variable
 */

/**In styled components i can also have nested styles as in sass
 * So if i have in NavMenu differenr anchor tags, i could:
 *  const Navmenu...
 *      a {
 *          
 *      }
 *  `
 */


