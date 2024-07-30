import Footer from "common/footer/footer";
import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import ManageRentalCarousel from "./components/Manage_rental_carousel";
import ManageRentalCar from "./components/Manage_rental_car";
import { useGetMyListings } from "api/actions/listings";
import empty from "assets/empty.png";
import { Listing } from "api/requests/listings";
import {  useState } from "react";


const ManageRentals = () => {

	const {data=[]} = useGetMyListings();


	const [selectedVehicle, setSelectedVehicle] = useState<Listing | null>(null);


/* 	useEffect(() => {
		if(data.length){
			setSelectedVehicle(data[0]);
		} else {
			setSelectedVehicle(null);
		}
	}, [data]) */


	const handleSelectVehicle = (id: string) => {
		const selected = data.find( (item) => item.id === id);
		if(selected){
			setSelectedVehicle(selected);
		}
	}


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

		{data.length? <ManageRentalCarousel data={data} handler={handleSelectVehicle}/> : null}
		{!data.length && <div className="flex flex-col items-center justify-center gap-5">
				<img src={empty} alt="empty" className="size-[200px]" />
				<p className="text-lg font-semibold text-gray-900">No Vehicles Found</p>
			</div>
		}


		<div className="mt-5 flex flex-row justify-center gap-5">
			<button 
				className="mt-5 rounded-md bg-black px-5 py-2 text-white" 
				type="button"
				onClick={() => setSelectedVehicle(null)}
				>
					Add New Vehicle
				</button>
		</div>


		{/* Manage Rental Car */}
		<ManageRentalCar data={selectedVehicle} />


		
		
	</section>

	{/* Footer */}
	<Footer />

	</main>
  );
};

export default ManageRentals;