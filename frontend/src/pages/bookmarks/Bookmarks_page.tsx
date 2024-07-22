import Footer from "common/footer/footer";
import VehicleMenu from "common/menus/vehicle_menu";
import Navbar from "common/navigation/navbar";
import SearchBarMain from "common/searchbars/searchbar_main";
import ManageBookmarksCarousel from "./components/Bookmarks_slideover";
import { useGetBookmarks } from "api/actions/bookmarks";
import empty from "assets/empty.png";


const BookmarksPage = () => {

	const {data=[]} = useGetBookmarks();

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
			{data.length && <ManageBookmarksCarousel data={data} />}
			{!data.length && <div className="flex flex-col items-center justify-center gap-5">
				<img src={empty} alt="empty" className="size-[200px]" />
				<p className="text-lg font-semibold text-gray-900">No Bookmarks Found</p>
			</div>
			}

		</div>
		


		{/* Footer */}
		<Footer />



	</main>
  );
};

export default BookmarksPage;