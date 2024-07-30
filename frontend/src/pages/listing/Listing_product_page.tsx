import DateRangePickerCalendar from "common/calendars/Date_range_picker";
import Footer from "common/footer/footer";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import ListingProductCard from "./components/Listing_produt_card";
import VehicleMenu from "common/menus/vehicle_menu";

import utv from "assets/utv.avif";
import { useParams } from "react-router-dom";
import ScrollLink from "common/Links/Scroll_link";
import { useGetListing } from "api/actions/listings";
import { assets } from "common/cars";
import { useMemo, useState } from "react";
import Chatbox from "./components/Chatbox";
import { BN } from "utils/calculations";
import { useSession } from "api/actions/session";


const ListingProduct = () => {

	//gets the slug from the url
	const { listingId = "", vehicleType="" } = useParams();

	const {user} = useSession();

	const {data} = useGetListing({listingId, vehicleType} );
	const [showChat, setShowChat] = useState(false);
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 7)));

	const handleChangeDate = (startDate: Date, endDate: Date) => {
		setStartDate(startDate);
		setEndDate(endDate);
	}


	const calculatedFields = useMemo( () => {
		const days = new BN(endDate.getTime() - startDate.getTime()).dividedBy(1000 * 3600 * 24);
		const rent = days.times(data?.price || 0);
		const delivery = new BN(55);
		const insurance = new BN(30);
		const subtotal = rent.plus(delivery).plus(insurance);
		const tax = subtotal.times(0.07);
		const total = subtotal.plus(tax);

		return {
			rent: rent.toNumber().toLocaleString(),
			delivery: delivery.toNumber().toLocaleString(),
			insurance: insurance.toNumber().toLocaleString(),
			subtotal: subtotal.toNumber().toLocaleString(),
			tax: tax.toNumber().toLocaleString(),
			total: total.toNumber().toLocaleString(),
		}
	}, [startDate, endDate, data?.price]);



	return (
	<main className="min-h-screen bg-[#f2f3f5]">

	{/* Navbar */}
	<Navbar />

	{/* Search Bar */}
	<SearchBarMain />

	{/* Vehicle menu */}
	<VehicleMenu />

	{/* Product */}
	<section className="mt-20 flex  flex-row justify-center gap-10">

		{/* Product image and description*/}
		<div >
			<ListingProductCard img={assets[data?.vehicle_type || ""]?.[data?.img_id || 0] || utv} description={data?.description || "Placeholder"} isBookmarked={false} />
		</div>

		{/* Calendar and reserve */}
		<div className="flex flex-col gap-10">
			<DateRangePickerCalendar startDate={startDate} endDate={endDate} handler={handleChangeDate}/>
			<div className="flex flex-col justify-around gap-5 sm:flex-row">
				<div className="w-[300px]">
					<div className=" border border-black bg-white p-2">
						{/* Price */}
						<p className="text-center text-2xl font-bold">${data?.price}/Day</p>
						<p className="text-center text-lg">{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
						
						{/* Divider */}
						<div className="my-1 h-0.5  bg-black"></div>

						{/* Price breakdown */}
						<div className="flex flex-row justify-between">
							<p className="text-lg">Rent</p>
							<p className="text-2xl font-bold">${calculatedFields.rent}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Insurance</p>
							<p className="text-2xl font-bold">${calculatedFields.insurance}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Delivery</p>
							<p className="text-2xl font-bold">${calculatedFields.delivery}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Subtotal</p>
							<p className="text-2xl font-bold">${calculatedFields.subtotal}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Tax</p>
							<p className="text-2xl font-bold">${calculatedFields.tax}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-lg">Total</p>
							<p className="text-2xl font-bold">${calculatedFields.total}</p>
						</div>
					</div>
					<ScrollLink to={user?.email ? `/listings/${vehicleType}/${listingId}/reserve?start_date=${startDate.toLocaleDateString()}&end_date=${endDate.toLocaleDateString()}`: "/login"} className="block w-full cursor-pointer border border-black bg-[#6db1ff] px-6 py-4 text-center text-2xl font-bold hover:bg-blue-300">
						Reserve Now
					</ScrollLink>
				</div>
				<button
					onClick={() => setShowChat(!showChat) } 
					className="h-fit cursor-pointer rounded-md border border-solid border-black bg-[#979ea8] px-6 py-4 text-2xl font-bold hover:bg-slate-400">
					Message Owner
				</button>

			</div>
		</div>

		{showChat && <Chatbox showChat={showChat} setShowChat={setShowChat} />}

	</section>



	{/*footer */}
	<Footer />



	</main>
  );
};

export default ListingProduct;