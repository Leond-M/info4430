import { FC } from "react";
import utv from "../../../assets/utv.avif";
import { GoStar, GoStarFill } from "react-icons/go";
import ScrollLink from "common/Links/Scroll_link";


type Props = {
	img: string;
	title: string;
	price: string;
	location: string;
	isBookmarked: boolean;
	id: number;
};


const VehicleGalleryCard: FC<Props> = ({location, price, isBookmarked,id}) => {



	return (
	<div className="relative mx-auto flex  w-[300px] flex-col  items-center justify-center sm:w-[350px]">
		<ScrollLink to={`/listings/${id}`}>
		<img src={utv} alt="vehicle" className="w-[300px] sm:w-[350px] " />
			<div className="flex w-full flex-row justify-between ">
				<p className="text-lg font-semibold text-gray-900">Location: </p>
				<p className="text-lg font-semibold text-gray-900">{location}</p>
			</div>
			<div className="flex w-full flex-row justify-between">
				<p className="text-lg font-semibold text-gray-900">Price</p>
				<p className="text-lg font-semibold text-gray-900">$ {price}</p>
			</div>

			{/* Bookmark Icon */}
			<div className="absolute right-2 top-2">
				<button
					type="button"
					className="cursor-pointer focus:outline-none"
				>
					{isBookmarked ? (
						<GoStarFill className="size-8 text-yellow-500" />
					) : (
						<GoStar className="size-8 text-gray-500" />
					)}
				</button>

			</div>
		</ScrollLink>
	</div>
  );




};

export default VehicleGalleryCard;