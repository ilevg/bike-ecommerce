import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { baseUrl } from "./config";

const SingleProductImgSlider = ( ) => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    dsfsdfd
                    {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    sdfsdf
                    {/* <img src={baseUrl + "/abstract01.jpg"} /> */}
                </div>
            </Slider>
        </div>
    );
}

export default SingleProductImgSlider
