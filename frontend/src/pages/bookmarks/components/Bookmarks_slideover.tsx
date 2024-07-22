import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FC } from "react";
import BookmarkGalleryCard from './Bookmark_card';
import { Listing } from 'api/requests/listings';





type Props = {
	data: Listing[];
}



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





const ManageBookmarksCarousel: FC<Props> = ({data}) => {

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
                {data.map((listing) => {
                    return (
                            <BookmarkGalleryCard key={Date.now()}
							data={listing}
                            />
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ManageBookmarksCarousel;