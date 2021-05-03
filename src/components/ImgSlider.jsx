import React from 'react';
import styled from 'styled-components';

/**For this slider, we are going to use the react slick, which is used
 * to user sliders. This dependency is insatlled in the terminal with package json (
 * using right click and open an integrated terminal in this file) --> this is how
 * we handle the dependencies. What we need to put is:
 *      - npm install react-slick --save
 *      - npm install slick-carousel
 * When are installed we can check that is correctly in the package.json dependencies
*/
import Slider from 'react-slick';
//And also need to import those css files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    
    // To use the slider we need to use the settings
    let settings = {
        dots: true, // To have dots in the slider
        infinite: true, //To infinitely move the slider
        speed: 500, //500 milliseconds of speed of transition of one slide to other
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    //We will put this settings into carousel by desctructing this object with ...
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
            </Wrap>
        </Carousel>
    )
}

// In this component we use the slider
const Carousel = styled(Slider)`
    margin-top: 20px;

    // Now i am going to edit the styles of the slider
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    // For the button which is in li in active (which represents the actual image, so it has the class slick-active)
    li.slick-active button:before{
        // By default the slick active in css is black, so we change it
        color: white;
    }

    .slick-list {
        // I want the images in the other slides to be visible, as by default is hidden
        overflow: visible;
    }

    button {
        // This is for the buttons of arrows to appear in both sides
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`;

export default ImgSlider;
