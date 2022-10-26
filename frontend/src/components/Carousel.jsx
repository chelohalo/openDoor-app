/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent({images}) {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className='w-1/2'
                // className="m-0 p-0 overflow-hidden w-1/2 relative"
            >
                <SwiperSlide>
                    <img
                        className="object-contain h-48 w-96"
                        //className="object-contain object-center"
                        src={images[0]}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain h-48 w-96"
                        //className="object-contain object-center"
                        src={images[1]}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain h-48 w-96"
                        //className="object-contain object-center"
                        src={images[2]}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain h-48 w-96"
                        //className="object-contain object-center"
                        src={images[3]}
                        alt="image slide 3"
                    />
                </SwiperSlide>

            </Swiper>
        </>
    );
}