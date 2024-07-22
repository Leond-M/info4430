/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import ScrollLink from "common/Links/Scroll_link";
import { Listing } from "api/requests/listings";
import { usePostBookmark } from "api/actions/bookmarks";
import { assets } from "common/cars";



type Props = {
	data: Listing;
};


const BookmarkGalleryCard: FC<Props> = ({data}) => {

	const {mutate, isPending} = usePostBookmark();

	return (
	<div className="relative mx-auto flex  w-[300px] flex-col  items-center justify-center sm:w-[350px]">
		<ScrollLink to={`/listings/${data.vehicle_type}/${data.id}`}>
		<img src={assets[data.vehicle_type]?.[data.img_id] || assets.utv[0]} alt="vehicle" className="w-[300px] sm:w-[350px] " />
			<div className="flex w-full flex-row justify-between gap-10 ">
				<p className="text-lg font-semibold text-gray-900">Location: </p>
				<p className="text-right text-lg font-semibold text-gray-900">{data.location}</p>
			</div>
			<div className="flex w-full flex-row justify-between">
				<p className="text-lg font-semibold text-gray-900">Price</p>
				<p className="text-lg font-semibold text-gray-900">$ {data.price}</p>
			</div>
		</ScrollLink>

			{/* Bookmark Icon */}
			<div className="absolute right-2 top-2">
				<button
					type="button"
					className="cursor-pointer focus:outline-none"
					onClick={() => mutate({listing_id: data.id, vehicle_type: data.vehicle_type})}
					disabled={isPending}
				>
					{data.is_bookmarked ? (
						<GoStarFill className="size-8 text-yellow-500 disabled:text-gray-500" />
					) : (
						<GoStar className="size-8 text-yellow-500 disabled:text-gray-500" />
					)}
				</button>
			</div>
	</div>
  );




};

export default BookmarkGalleryCard;