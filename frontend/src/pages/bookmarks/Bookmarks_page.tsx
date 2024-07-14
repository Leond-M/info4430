import Footer from "common/footer/footer";
import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import ManageBookmarksCarousel from "./components/Bookmarks_slideover";


const BookmarksPage = () => {
	  return (
	<main className="flex min-h-screen flex-col bg-[#f2f3f5]">

		{/* Navbar */}
		<Navbar />

		{/* Search Bar */}
		<SearchBarMain />

		{/* Vehicle Menu */}
		<VehicleMenu/>


		<div className="mt-20  gap-5" >
			<h1 className="mt-10 text-center text-3xl font-semibold">Bookmarks</h1>
			{/* Bookmarks */}
			<ManageBookmarksCarousel />
		</div>
		


		{/* Footer */}
		<Footer />



	</main>
  );
};

export default BookmarksPage;