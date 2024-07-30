import { assets } from "common/cars";
import { FC } from "react";
import noImage from "assets/noimage.webp";
import { Listing } from "api/requests/listings";

type Props = {
	data: Listing;
	handler: (id: string) => void;
};


const CarouselCard:FC<Props>  = ({data, handler}) => {

	return (
		<button 
			className="flex flex-col gap-5 px-6"
			type="button"
			onClick={() => handler(data.id)}

			
			>
			{/* Image */}
			<div className="h-[250px]">
				<img src={assets[data.vehicle_type]?.[data.img_id] || noImage} alt="vehicle" className="w-[300px]  sm:w-[350px] md:w-[450px]" />
			</div>
		</button>
	);
};

export default CarouselCard;
