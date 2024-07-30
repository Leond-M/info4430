import logo from 'assets/logo_black.avif'
import Footer from 'common/footer/footer';
import ScrollLink from 'common/Links/Scroll_link';
import { Link } from 'react-router-dom';



const AccountPage = () => {

	return (
		<main className="flex min-h-screen flex-col bg-[#f2f3f5]">
			<div className='flex flex-col items-center justify-center'>
				<Link to="/" className="flex items-center justify-center gap-5 px-10 py-5 ">
					<img src={logo} alt="logo" className=" w-[300px] md:w-[300px]" />
				</Link>
				<h1 
					className="rounded-sm border border-black bg-[#979ea8] px-16 py-4 text-4xl font-semibold"
				>
					My Acccount
				</h1>
			</div>

			{/* Account Information */}
			<div className='mx-auto my-16 grid grid-cols-2 items-center justify-center gap-10'>
{/* 				<ScrollLink
					to='/account/contact-info'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					Contact Info
				</ScrollLink> */}
				<ScrollLink
					to='/manage-rentals'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					My Vehicles
				</ScrollLink>
				<ScrollLink
					to='/bookmarks'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					Bookmarks
				</ScrollLink>
				<ScrollLink
					to='/borrowed'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					Borrowed
				</ScrollLink>
				<a
					href='mailto:support@borrowed.com'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					Support
				</a>
{/* 				<ScrollLink
					to='/account/settings'
					className="rounded-md border border-black bg-[#dedeff] px-8 py-4 text-center text-2xl font-semibold text-gray-900 hover:underline"
				>
					Settings
				</ScrollLink> */}
			</div>

			{/* Footer */}

			<Footer />

		</main>
	);
};

export default AccountPage;