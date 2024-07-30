import { useSession } from "api/actions/session";
import { NotificationList } from "common/notifications/Notifications_comp";
import NotFound from "pages/404/Not_found_page";
import AccountPage from "pages/account/account_page";
import BookmarksPage from "pages/bookmarks/Bookmarks_page";
import BorrowedProductReservePage from "pages/borrowed/Borrowed_product_reserve_page";
import BorrowedVehiclePage from "pages/borrowed/Borrowed_vehicle_page";
import Homepage from "pages/home/Homepage2";
import ListingProduct from "pages/listing/Listing_product_page";
import ListingProductReservePage from "pages/listing/Listing_product_reserve_page";
import SignInPage from "pages/login/Sign_in_page";
import PaymentCompletion from "pages/payments/payments_completion";
import RegisterPage from "pages/register/Register_page";
import ManageRentals from "pages/rental/Manage_rental_page";
import VehiclePage from "pages/vehicle/Vehicle_page";
import { Routes, Route } from "react-router-dom";

//main file for the whole applition. This takes the routing and the pages and puts them together
function App() {
	useSession();

	return (
		<main className="flex min-h-screen w-full flex-col bg-white text-black sm:max-w-full">
			{/* Routes for the application */}
			<Routes>
				{/* Landing page */}
				<Route path="/" element={<Homepage />} />

				{/* Register page */}
				<Route path="/register" element={<RegisterPage />} />

				{/* Login page */}
				<Route path="/login" element={<SignInPage />} />

				{/* Vehicle page */}
				<Route path="/vehicles">
					<Route path=":vehicleType?" element={<VehiclePage />} />
				</Route>

				{/* Product */}
				<Route path="/listings" >
					<Route path=":vehicleType/:listingId" element={<ListingProduct/>} />
					<Route path=":vehicleType/:listingId/reserve" element={<ListingProductReservePage />} />
				</Route>

				{/* Borrowed page */}
				<Route path="/borrowed">
					<Route index element={<BorrowedVehiclePage />} />
					<Route path=":vehicleType/:listingId" element={<BorrowedProductReservePage />} />
				</Route>

				

				{/* Manage rentals */}
				<Route path="/manage-rentals" element={<ManageRentals />} /> 

				{/* Account page */}
				<Route path="/account" element={<AccountPage />} />

				{/* Bookmarks page */}
				<Route path="/bookmarks" element={<BookmarksPage />} />

				{/* Payments pages */}
				<Route path="/payment-completion" element={<PaymentCompletion/>} />

				{/* 404 page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<NotificationList />
		</main>
	);
}

export default App;
