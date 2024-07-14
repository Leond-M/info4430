import { FC } from "react";
import { GoStar, GoStarFill } from "react-icons/go";

type Props = {
	img: string;
	description: string;
	isBookmarked?: boolean;
};




const ListingProductCard:FC <Props> = ({img, description, isBookmarked}) => {

	return (
		<div className="relative flex w-[300px] flex-col items-center justify-center sm:w-[350px] md:w-[450px]">
			{/* Product image */}
			<div>
				<img src={img} alt="product" className="w-[300px] sm:w-[350px] md:w-[450px]" />
			</div>

			{/* Product description */}
			<div>
				<pre className="w-[300px] text-wrap sm:w-[350px] md:w-[450px]">{description}</pre>
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
		</div>
	);
};

export default ListingProductCard;