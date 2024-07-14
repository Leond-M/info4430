import DateRangePickerCalendar from "common/calendars/Date_range_picker";
import Footer from "common/footer/footer";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import ListingProductCard from "./components/Listing_produt_card";
import VehicleMenu from "common/menus/vehicle_menu";

import utv from "assets/utv.avif";
import { useParams } from "react-router-dom";
import ScrollLink from "common/Links/Scroll_link";


const description = `
This vehicle will have a description here by the owner on their thoughts on the vehicle so the renter knows what they will be renting out.

Amenities:
-Extra gas tank in the back
-Extra bunjey cords
-Delivery and pickup included up to 25 miles

Renters Insurance on every vehicle so YOU are protected.

Not ready to reserve? Bookmark any vehicle you like to save it.

Have a question? Message the owner and find out more about the vehicle before you reserve it.
`;


const ListingProduct = () => {

	
	//gets the slug from the url
	const { listingId = "" } = useParams();


	  return (
	<main className="min-h-screen bg-[#f2f3f5]">

	{/* Navbar */}
	<Navbar />

	{/* Search Bar */}
	<SearchBarMain />

	{/* Vehicle menu */}
	<VehicleMenu />

	{/* Product */}
	<section className="mt-20 flex flex-row  justify-center gap-10">

		{/* Product image and description*/}
		<div >
			<ListingProductCard img={utv} description={description} isBookmarked={false} />
		</div>

		{/* Calendar and reserve */}
		<div className="flex flex-col gap-10">
			<DateRangePickerCalendar />
			<div className="flex flex-col justify-around gap-5 sm:flex-row">
				<div className="w-[300px]">
					<div className=" border border-black bg-white p-2">
						{/* Price */}
						<p className="text-center text-2xl font-bold">$200/Day</p>
						<p className="text-center text-lg">3/10 - 4/10</p>
						
						{/* Divider */}
						<div className="my-1 h-0.5  bg-black"></div>

						{/* Price breakdown */}
						<div className="flex flex-row justify-between">
							<p className="text-lg">Rent</p>
							<p className="text-2xl font-bold">$800</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Insurance</p>
							<p className="text-2xl font-bold">$30</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Delivery</p>
							<p className="text-2xl font-bold">$55</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Subtotal</p>
							<p className="text-2xl font-bold">$945</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Tax</p>
							<p className="text-2xl font-bold">$66.15</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Total</p>
							<p className="text-2xl font-bold">$1011.15</p>
						</div>
					</div>
					<ScrollLink to={`/listings/${listingId}/reserve`} className="block w-full cursor-pointer border border-black bg-[#6db1ff] px-6 py-4 text-center text-2xl font-bold hover:bg-blue-300">
						Reserve Now
					</ScrollLink>
				</div>
				<button className="h-fit cursor-pointer rounded-md border border-solid border-black bg-[#979ea8] px-6 py-4 text-2xl font-bold hover:bg-slate-400">
					Message Owner
				</button>

			</div>
		</div>

	</section>



	{/*footer */}
	<Footer />



	</main>
  );
};

export default ListingProduct;