import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FC } from "react";



import utv from "assets/utv.avif"
import atv from "assets/atv.avif"
import campers from "assets/campers.avif"
import dirtBikes from "assets/dirt_bikes.avif"
import BookmarkGalleryCard from './Bookmark_card';




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



  const mockData = [
	{
		img: utv,
		title: "Vehicle 1",
		price: "$100",
		location: "Location 1",
		isBookmarked: true,
		id: 1,
	},
	{
		img: atv,
		title: "Vehicle 2",
		price: "$200",
		location: "Location 2",
		isBookmarked: true,
		id: 2,
	},
	{
		img: campers,
		title: "Vehicle 3",
		price: "$300",
		location: "Location 3",
		isBookmarked: true,
		id: 3,
	},
	{
		img: dirtBikes,
		title: "Vehicle 4",
		price: "$400",
		location: "Location 4",
		isBookmarked: true,
		id: 4,
	},
	{
		img: atv,
		title: "Vehicle 5",
		price: "$500",
		location: "Location 5",
		isBookmarked: true,
		id: 5,
	},
	{
		img: utv,
		title: "Vehicle 6",
		price: "$600",
		location: "Location 6",
		isBookmarked: true,
		id: 6,
	},
	{
		img: campers,
		title: "Vehicle 7",
		price: "$700",
		location: "Location 7",
		isBookmarked: true,
		id: 7,
	},
	{
		img: dirtBikes,
		title: "Vehicle 8",
		price: "$800",
		location: "Location 8",
		isBookmarked: true,
		id: 8,
	},
	{
		img: campers,
		title: "Vehicle 9",
		price: "$900",
		location: "Location 9",
		isBookmarked: true,
		id: 9,
	},
	{
		img: atv,
		title: "Vehicle 10",
		price: "$1000",
		location: "Location 10",
		isBookmarked: true,
		id: 10,
	},
	{
		img: utv,
		title: "Vehicle 11",
		price: "$1100",
		location: "Location 11",
		isBookmarked: true,
		id: 11,
	},
	{
		img: dirtBikes,
		title: "Vehicle 12",
		price: "$1200",
		location: "Location 12",
		isBookmarked: true,
		id: 12,
	},
];



const ManageBookmarksCarousel: FC = () => {

    return (
        <div className={`slider-container mx-auto mt-20  max-w-7xl`}>
            <Carousel 
			
			swipeable={false}
			draggable={false}
			showDots={false}
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
                {mockData.map((listing) => {
                    return (
                            <BookmarkGalleryCard key={Date.now()}
							{...listing}
                            />
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ManageBookmarksCarousel;