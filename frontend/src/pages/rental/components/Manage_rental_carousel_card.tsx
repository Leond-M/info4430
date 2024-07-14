import { FC } from "react";

type Props = {
	img: string;
	id: string;
};


const CarouselCard:FC<Props>  = ({img}) => {

	return (
		<button 
			className="flex flex-col gap-5 px-6"
			type="button"
			
			>
			{/* Image */}
			<div className="h-[250px]">
				<img src={img} alt="vehicle" className="w-[300px]  sm:w-[350px] md:w-[450px]" />
			</div>
		</button>
	);
};

export default CarouselCard;
