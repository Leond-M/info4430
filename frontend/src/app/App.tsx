import { useSession } from "api/actions/session";
import { NotificationList } from "common/notifications/Notifications_comp";
import NotFound from "pages/404/Not_found_page";
import Homepage from "pages/home/Homepage2";
import SignInPage from "pages/login/Sign_in";
import RegisterPage from "pages/register/Register";
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

				{/* 404 page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<NotificationList />
		</main>
	);
}

export default App;
