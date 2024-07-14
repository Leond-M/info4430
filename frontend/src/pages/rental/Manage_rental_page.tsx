import Footer from "common/footer/footer";
import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import ManageRentalCarousel from "./components/Manage_rental_carousel";
import { RiImageAddLine } from "react-icons/ri";

import utv from "assets/utv.avif";
import DateRangePickerCalendar from "common/calendars/Date_range_picker";


const ManageRentals = () => {
	  return (
	<main className="min-h-screen bg-[#f2f3f5]">

	{/* Navbar */}
	<Navbar />

	{/* Search Bar */}
	<SearchBarMain />

	{/* Vehicle Menu */}
	<VehicleMenu/>

	{/* Rentals */}
	<section className="container mx-auto mt-20 rounded-lg border-2 border-black px-4 py-10">
		{/* Icong and title */}
		<div className="flex flex-row gap-5" >
			<BsFillWrenchAdjustableCircleFill className="size-10 text-black" />
			<h1 className="text-3xl font-semibold">Select My Rentals</h1>
		</div>

		{/* Divider */}
		<hr className="my-5 border border-black"/>

		<ManageRentalCarousel />


		{/* Manage Rental */}
		<div className="mx-16 mt-10 rounded-lg border-2 border-black px-4 py-10">
			<div className="mb-2 flex flex-row">
				{/* Icon and title */}
				<BsFillWrenchAdjustableCircleFill className="size-10 text-black" />
				<h1 className="text-3xl font-semibold">UTV</h1>
			</div>

			{/* Divider */}
			<hr className="mb-5 w-full border border-solid border-black"/>



			{/* Info */}
			<div className="flex flex-col items-center justify-center gap-5 py-5 sm:flex-row sm:gap-20">

				<div className="flex flex-col gap-5">
					{/* Image */}
					<div className="flex flex-col">
						<img src={utv} alt="vehicle" className=" w-[300px]  sm:w-[350px] md:w-[450px]" />
					</div>

					{/* Change Image */}
					<button className="flex flex-row gap-5">
						<RiImageAddLine className="size-10 text-black" />
						<h1 className="text-2xl font-semibold">Change Image</h1>
					</button>

				</div>


				{/* Calendar */}
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-center gap-5">
						<h1 className="text-2xl font-semibold">Select Dates</h1>
						<DateRangePickerCalendar />
					</div>

					{/* Change Price Input*/}
					<div className="mt-10 flex flex-row gap-5">
						<h1 className="text-2xl font-semibold">Change Price</h1>
						<input 
							type="number" 
							className="h-10 w-[200px] rounded-md border-2 border-black text-right"
							placeholder="$100"
						/>
					</div>

					<button className="mt-10 rounded-lg bg-[#6db1ff] px-5 py-4  text-2xl font-bold text-black hover:bg-blue-300">Save Changes</button>
				</div>
			</div>
		
		</div>
	</section>

	{/* Footer */}
	<Footer />

	</main>
  );
};

export default ManageRentals;