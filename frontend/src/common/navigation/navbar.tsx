import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../assets/logo_black.avif";

import { useSession } from "api/actions/session";
import { Link } from "react-router-dom";


const Navbar = () => {

	const {user, logout} = useSession();

	  return (
		<nav>
		<Disclosure as="nav" className="">
			{({ open }) => (
				<>
					<div className=" max-w-full px-2 sm:px-6 lg:px-8">
						<div className="relative flex justify-between">
							<section>
								<Link to="/" className="flex items-center justify-center gap-5 px-10 py-5 ">
									<img src={logo} alt="logo" className=" w-[100px] md:w-[150px]" />
								</Link>
							</section>

							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<HiXMark className="block size-6" aria-hidden="true" />
									) : (
										<HiBars3 className="block size-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>

							<div className="absolute inset-y-0 right-0 hidden items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:gap-[20px] sm:pr-0">


								<Link
									to="/"
									className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
								>
									Home
								</Link>
	
								{!user?.email && (
									<>
										<Link
											to="/login"
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Login
										</Link>
										<Link
											to="/register"
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Register
										</Link>
									</>
								)}

								{user?.email && (
									<>
										<Link
											to="/bookmarks"
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Bookmarks
										</Link>
										<Link
											to="/vehicles/utv"
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Reserve
										</Link>
										<Link
											to="/account"
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Account
										</Link>

										<button
											onClick={() => logout()}
											className="text-lg font-semibold text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-[10px]"
										>
											Log out
										</button>
									</>
								)}
							</div>
						</div>
					</div>

					<DisclosurePanel className="sm:hidden">
						<div className="space-y-1 pb-4 pt-2">
							<DisclosureButton
								as="a"
								href="#"
								className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
							>
								Home
							</DisclosureButton>

							{!user?.email && (
								<>
									<DisclosureButton
										as="a"
										href="#"
										className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
									>
										Login
									</DisclosureButton>
									<DisclosureButton
										as="a"
										href="#"
										className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
									>
										Register
									</DisclosureButton>
								</>
							)}

							{user?.email && (
								<DisclosureButton
									as="a"
									href="#"
									className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
								>
									Log out
								</DisclosureButton>
							)}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	</nav>
  );
};

export default Navbar;