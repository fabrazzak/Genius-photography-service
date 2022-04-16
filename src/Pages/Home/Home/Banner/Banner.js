import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/Banner/banner.jpg'
import banner2 from '../../../../images/Banner/banner1.jpg'
import banner3 from '../../../../images/Banner/banner2.jpg'
import banner4 from '../../../../images/Banner/banner3.jpg'

const Banner = () => {
    return (
        <Carousel className='carousel-banner'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    
                    <p>Norwegian Photographer based in Oslo and London, working with portraiture, fashion and art</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                   
                    <p>Norwegian Photographer based in Oslo and London, working with portraiture, fashion and art</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   
                    <p>Norwegian Photographer based in Oslo and London, working with portraiture, fashion and art</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   
                    <p > Norwegian Photographer based in Oslo and London, working with portraiture, fashion and art</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;