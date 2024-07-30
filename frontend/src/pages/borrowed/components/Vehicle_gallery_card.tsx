/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import ScrollLink from "common/Links/Scroll_link";
import { Listing } from "api/requests/listings";


//import pictures
import utv from "assets/utv/utv.avif";
import utv2 from "assets/utv/utv2.jpg";
import utv3 from "assets/utv/utv3.jpg";

import atv from "assets/atv/atv.avif";
import atv2 from "assets/atv/atv2.jpg";
import atv3 from "assets/atv/atv3.jpg";

import dirtbike from "assets/dirtbike/dirt_bikes.avif";
import dirtbike2 from "assets/dirtbike/dirt_bike2.jpg";
import dirtbike3 from "assets/dirtbike/dirt_bike3.jpg";

import camper from "assets/camper/campers.avif";
import camper2 from "assets/camper/camper2.avif";
import camper3 from "assets/camper/camper3.avif";

import rv from "assets/rv/rvs.avif";
import rv2 from "assets/rv/rv2.jpg";
import rv3 from "assets/rv/rv3.jpg";

import ebike from "assets/ebike/electric_bikes.avif";
import ebike2 from "assets/ebike/ebike2.jpg";
import ebike3 from "assets/ebike/ebike3.webp";

import jetski from "assets/jetski/jetski.avif";
import jetski2 from "assets/jetski/jetski2.png";
import jetski3 from "assets/jetski/jetski3.webp";

import boat from "assets/boat/boat.webp";
import boat2 from "assets/boat/boat2.jpg";
import boat3 from "assets/boat/boat3.jpg";

import other from "assets/other/other.webp";
import other2 from "assets/other/other2.jpg";
import other3 from "assets/other/other3.jpg";


const assets: any = {
	utv: [utv, utv2, utv3],
	atv: [atv, atv2, atv3],
	dirtbike: [dirtbike, dirtbike2, dirtbike3],
	camper: [camper, camper2, camper3],
	rv: [rv, rv2, rv3],
	ebike: [ebike, ebike2, ebike3],
	jetski: [jetski, jetski2, jetski3],
	boat: [boat, boat2, boat3],
	other: [other, other2, other3],
};


type Props = {
	data: Listing;
};

const VehicleGalleryCard: FC<Props> = ({data}) => {

	return (
	<div className="relative mx-auto flex  min-h-[300px] w-[300px] flex-col  items-center justify-center sm:w-[350px]">
		<ScrollLink to={`/borrowed/${data.vehicle_type}/${data.id}`}>
		<img src={assets[data.vehicle_type]?.[data.img_id] || utv} alt="vehicle" className=" max-h-[350px] min-h-[300px] w-[300px] sm:w-[350px] " />
			<div className="flex w-full flex-row justify-between gap-10">
				<p className="text-lg font-semibold text-gray-900">Location: </p>
				<p className="text-right text-lg font-semibold text-gray-900">{data.location}</p>
			</div>
			<div className="flex w-full flex-row justify-between">
				<p className="text-lg font-semibold text-gray-900">Start Date</p>
				<p className="text-lg font-semibold text-gray-900">{new Date(data.rent_start_date_time).toLocaleDateString()}</p>
			</div>

			<div className="flex w-full flex-row justify-between">
				<p className="text-lg font-semibold text-gray-900">End Date</p>
				<p className="text-lg font-semibold text-gray-900">{new Date(data.rent_end_date_time).toLocaleDateString()}</p>
			</div>
		</ScrollLink>
	</div>
  );




};

export default VehicleGalleryCard;