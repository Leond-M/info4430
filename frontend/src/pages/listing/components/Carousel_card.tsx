import { FC } from "react";

type Props = {
	img: string;
	description: string;
};


const CarouselCard:FC<Props>  = ({img, description}) => {

	return (
		<div className="flex flex-col gap-5 px-6">
			{/* Image */}
			<div className="h-[250px]">
				<img src={img} alt="vehicle" className="w-[300px]  sm:w-[350px] md:w-[450px]" />
			</div>
			
			{/* Description */}
			<p className="font-semibold">{description}</p>
		</div>
	);
};

export default CarouselCard;
