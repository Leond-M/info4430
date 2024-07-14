import { Link } from "react-router-dom";



const VehicleMenu = () => {
	  return (
		<main className="flex w-full flex-row justify-around border border-solid border-black bg-[#979ea8] py-2">
			<Link to="/vehicles/utv" 
				className={`${window.location.pathname.toLowerCase().includes("utv")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				UTV
			</Link>
			<Link to="/vehicles/atv" 
				className={`${window.location.pathname.toLowerCase().includes("atv")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				ATV
			</Link>
			<Link to="/vehicles/dirtbike"
				className={`${window.location.pathname.toLowerCase().includes("dirtbike")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				Dirt Bike
			</Link>
			<Link to="/vehicles/camper"
				className={`${window.location.pathname.toLowerCase().includes("camper")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				Camper
			</Link>
			<Link to="/vehicles/rv"
				className={`${window.location.pathname.toLowerCase().includes("rv")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				RV
			</Link>
			<Link to="/vehicles/ebike"
				className={`${window.location.pathname.toLowerCase().includes("ebike")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				E Bike
			</Link>
			<Link to="/vehicles/jetski"
				className={`${window.location.pathname.toLowerCase().includes("jetski")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				Jetski
			</Link>
			<Link to="/vehicles/boat"
				className={`${window.location.pathname.toLowerCase().includes("boat")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				Boat
			</Link>
			<Link to="/vehicles/other"
				className={`${window.location.pathname.toLowerCase().includes("other")? "underline underline-offset-4": ""} text-4xl font-semibold text-black hover:underline hover:underline-offset-4`}>
				Other
			</Link>

		</main>
  );
};

export default VehicleMenu;