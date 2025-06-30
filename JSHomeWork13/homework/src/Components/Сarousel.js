import React, { useRef } from 'react';
import './Carousel.css';

export function Carousel() {
    const carouselRef = useRef(null);

    function scrollLeft() {
        if (carouselRef.current) {
        carouselRef.current.scrollLeft -= 220;
        }
    }

    function scrollRight() {
        if (carouselRef.current) {
        carouselRef.current.scrollLeft += 220;
        }
    }

    return(
        <div className='carousel-wrapper'>
            <button className='carousel_btn left' onClick={scrollLeft}/>
            <div className='carousel' ref={carouselRef}>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>
                <div className='carousel_card'>
                    <img src='Carousel-img.jpg'/>
                </div>

            </div>
            <button className='carousel_btn' onClick={scrollLeft}/>
        </div>
    );
}












