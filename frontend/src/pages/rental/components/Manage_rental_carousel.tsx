import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FC } from "react";


import CarouselCard from "./Manage_rental_carousel_card";
import utv from "assets/utv.avif"
import atv from "assets/atv.avif"
import campers from "assets/campers.avif"
import dirtBikes from "assets/dirt_bikes.avif"




const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 3
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 3
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };


const listings = [
	{
		img: utv,
		id: "Guided offroading through canyons"
	},
	{
		img: atv,
		id: "Horseback Riding through the mountains"
	},
	{
		img: campers,
		id: "July 4th Bash at the Night Train featuring DJ Rad"
	},
	{
		img: dirtBikes,
		id: "Award-winning Moab Music Festival brings world-class musicians to stunning red rock venues around Moab, Utah"
	}
];



const ManageRentalCarousel: FC = () => {
    return (
        <div className={`slider-container mx-auto mt-20 block max-w-7xl`}>
            <Carousel 
			
			
			swipeable={false}
			draggable={false}
			showDots={true}
			responsive={responsive}
			infinite={true}
			autoPlay={false}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"			
			
			
			>
                {listings.map((listing) => {
                    return (
                            <CarouselCard key={listing.id}
                                img={listing.img}
								id={listing.id}
                            />
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ManageRentalCarousel;