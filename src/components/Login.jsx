import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <CTALogo1 src="/images/cta-logo-one.svg"/>
                <SignUp>
                    Get All There
                </SignUp>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut architecto dolore. Ipsa iste sit perferendis ut, obcaecati neque error!</Description> 
                <CTALogo2 src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        opacity: 0.7;

        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
    }
`;

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

// We have passed the src as a property of the component in the return of Login component
const CTALogo1 = styled.img `
`;

const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-align: center;
    padding: 17px 0;
    margin-top: 8px;
    margin-bottom: 12px;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18pxx;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;

    &:hover {
        background: #0483ee;

    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 1.5px; 
`;

const CTALogo2 = styled.img`
    width: 90%;
`



export default Login
