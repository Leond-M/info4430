import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import utv from "assets/utv.avif";
import Footer from "common/footer/footer";
import SliderComponent from "./components/Carousel";


const ListingProductReservePage = () => {
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
		<h1 className="mt-20 text-center text-4xl">Request Reservation</h1>

		<div className="mt-20 flex w-full flex-col  justify-center gap-10 sm:flex-row sm:gap-[100px]">
			{/* Vehicle */}
			<div className="flex w-[300px] flex-col gap-5 sm:w-[350px] md:w-[450px]">
				{/* Vehicle image */}
				<img src={utv} alt="vehicle" className="w-[300px] sm:w-[350px] md:w-[450px]" />
				{/* Vehicle description */}
				<div className="flex flex-col gap-1">
					<p className="text-2xl font-bold">2021 Can-Am Maverick X3 X RS Turbo RR</p>
					<p className="text-lg">10/10 - 11/10</p>
				</div>
			</div>

			{/* Payment */}
			<div className="w-[300px] sm:w-[350px] md:w-[450px]">
				<h1 className="w-full text-center text-4xl font-bold">Reservation Details</h1>
				<p className="text-center text-lg font-semibold">3/10 - 4/10</p>
					<div className="mt-5 flex flex-col gap-2 p-2">
						{/* Price breakdown */}
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Rent</p>
							<p className="text-2xl font-semibold">$800</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Insurance</p>
							<p className="text-2xl font-semibold">$30</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Delivery</p>
							<p className="text-2xl font-semibold">$55</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Subtotal</p>
							<p className="text-2xl font-semibold">$945</p>
						</div>
						<div className="flex flex-row justify-between">
							<p className="text-2xl font-semibold">Tax</p>
							<p className="text-2xl font-semibold">$66.15</p>
						</div>
						<div className="mt-10 flex flex-row justify-between">
							<p className="text-2xl font-semibold">Total</p>
							<p className="text-2xl font-semibold">$1011.15</p>
						</div>
					</div>
					<button type="button"	className="block w-full cursor-pointer  bg-[#6db1ff] px-6 py-4 text-center text-2xl font-bold hover:bg-blue-300">
						Pay Now
					</button>
				</div>
		</div>
	</section>

	<SliderComponent />


	{/* Footer */}
	<Footer />

	</main>
  );
};

export default ListingProductReservePage;