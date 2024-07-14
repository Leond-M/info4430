/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import CarouselCard from "./Carousel_card";

import canyons from "assets/events/canyons.jpeg";
import horse from "assets/events/horse.jpeg";
import moab from "assets/events/moab.jpeg";
import moab2 from "assets/events/moab.png";




const SampleNextArrow = (props:any) => {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block",  }}
		onClick={onClick}
	  />
	);
  }

  const SamplePrevArrow = (props:any) => {
	const { className, onClick } = props;
	return (
	  <div
		className={`${className}  `}
		onClick={onClick}
	  >
	  </div>

	);
  }


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
    ],
};

const events = [
	{
		img: canyons,
		description: "Guided offroading through canyons"
	},
	{
		img: horse,
		description: "Horseback Riding through the mountains"
	},
	{
		img: moab,
		description: "July 4th Bash at the Night Train featuring DJ Rad"
	},
	{
		img: moab2,
		description: "Award-winning Moab Music Festival brings world-class musicians to stunning red rock venues around Moab, Utah"
	}
];



const SliderComponent: FC = () => {
    return (
        <div className={`slider-container mx-auto mt-20 block max-w-7xl`}>
			<h1 className="mb-10 text-left text-4xl font-bold">Upcoming Events</h1>
            <Slider {...settings}>
                {events.map((event) => {
                    return (
                            <CarouselCard key={event.description}
                                description={event.description}
                                img={event.img}
                            />
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;