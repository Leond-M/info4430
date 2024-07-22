import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import VehicleGallery from "./components/Vehicle_gallery";
import Footer from "common/footer/footer";
import { useParams } from "react-router-dom";
import { useGetListings } from "api/actions/listings";
import { CircularProgress } from "@mui/material";

const VehiclePage = () => {

	const {vehicleType= "utv"} = useParams();

	const {data=[], isLoading} = useGetListings(vehicleType);





	  return (
	<main className="min-h-screen bg-[#f2f3f5]">

		{/* Navbar */}
		<Navbar />

		{/* Search Bar */}
		<SearchBarMain />

		{/* Vehicle Menu */}
		<VehicleMenu/>

		{/* Vehicle Gallery */}
		{!isLoading && <VehicleGallery data={data}/>}
		{isLoading && <div className="flex min-h-[600px] w-full flex-col items-center justify-center">
			<CircularProgress size={20} />
		</div>
		}

		{/* Show More */}
		<section className="mt-10 flex w-full items-center justify-center">
			{data.length > 12 && <button className="cursor-pointer rounded-md border border-solid border-black bg-[#979ea8] px-6 py-2 text-2xl font-bold hover:bg-slate-400">
				Show More
			</button>
		}
		</section>

		{/* Footer */}
		<Footer />


	</main>
  );
};

export default VehiclePage;