import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import Footer from "common/footer/footer";
import { useParams } from "react-router-dom";
import { useGetListing } from "api/actions/listings";
import { BN } from "utils/calculations";
import { useMemo, useState } from "react";
import { assets } from "common/cars";
import Chatbox from "pages/listing/components/Chatbox";


const BorrowedProductReservePage = () => {
	//gets the slug from the url
	const { listingId = "", vehicleType="" } = useParams();
	const [showChat, setShowChat] = useState(false);

	const {data} = useGetListing({listingId, vehicleType} );



	const calculatedFields = useMemo( () => {

		const startDate = new Date(data?.rent_start_date_time || new Date());
		const endDate = new Date(data?.rent_end_date_time || new Date(new Date().setDate(new Date().getDate() + 7)));

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
			startDate,
			endDate
		}
	}, [data?.rent_start_date_time, data?.rent_end_date_time, data?.price]);

	  return (
	<main className="min-h-screen bg-[#f2f3f5]">

	{/* Navbar */}
	<Navbar />

	{/* Search Bar */}
	<SearchBarMain />

	{/* Vehicle menu */}
	<VehicleMenu />


	{/* Reservation */}
	<section className="w-full flex-col items-center justify-center px-10">
		<h1 className="mt-20 text-center text-4xl">Reservation Details</h1>

		<div className="mt-20 flex w-full flex-col  justify-center gap-10 sm:flex-row sm:gap-[100px]">
			{/* Vehicle */}
			<div className="flex w-[300px] flex-col gap-5 sm:w-[350px] md:w-[450px]">
				{/* Vehicle image */}
				<img src={data? assets[data.vehicle_type]?.[data.img_id] : assets.utv[0]} alt="vehicle" className="w-[300px] sm:w-[350px] md:w-[450px]" />
				{/* Vehicle description */}
				<div className="flex flex-col gap-1">
					<p className="text-2xl font-bold">{data?.description}</p>
				</div>
			</div>

			{/* Payment */}
			<div className="w-[300px] sm:w-[350px] md:w-[450px]">
				<h1 className="w-full text-center text-4xl font-bold">Reservation Details</h1>
				<p className="text-center text-lg font-semibold">{calculatedFields.startDate.toLocaleDateString()} - {calculatedFields.endDate.toLocaleDateString()}</p>
					<div className="mt-5 flex flex-col gap-2 p-2">
						{/* Price breakdown */}
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Rent</p>
							<p className="text-2xl font-semibold">${calculatedFields.rent}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Insurance</p>
							<p className="text-2xl font-semibold">${calculatedFields.insurance}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Delivery</p>
							<p className="text-2xl font-semibold">${calculatedFields.delivery}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Subtotal</p>
							<p className="text-2xl font-semibold">${calculatedFields.subtotal}</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Tax</p>
							<p className="text-2xl font-semibold">${calculatedFields.tax}</p>
						</div>
						<div className="mt-10 flex flex-row justify-between">
							<p className="text-2xl font-semibold">Total</p>
							<p className="text-2xl font-semibold">${calculatedFields.total}</p>
						</div>
					</div>
					<div className="mt-10 flex w-full items-center justify-center">
						<button
						onClick={() => setShowChat(!showChat) } 
						className="h-fit cursor-pointer rounded-md border border-solid border-black bg-[#979ea8] px-6 py-4 text-2xl font-bold hover:bg-slate-400">
						Message Owner
						</button>
					</div>
				</div>

		</div>
	</section>
	{showChat && <Chatbox showChat={showChat} setShowChat={setShowChat} />}

	{/* Footer */}
	<Footer />

	</main>
  );
};

export default BorrowedProductReservePage;