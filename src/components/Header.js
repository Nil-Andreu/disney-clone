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

`;


export default Header;

/**When we select a word and put Command+D, gonna select all the same words in the file.
 * This is useful when changing a name to a variable
 */


