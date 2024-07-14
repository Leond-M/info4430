
import { HiBuildingOffice2, HiEnvelope, HiPhone, } from "react-icons/hi2";
import { FC } from "react";

import hero from "../../assets/hero.avif";
import hero2 from "../../assets/hero2.avif";
import utv from "../../assets/utv.avif";
import atv from "../../assets/atv.avif";
import dirt_bikes from "../../assets/dirt_bikes.avif";
import campers from "../../assets/campers.avif";
import rvs from "../../assets/rvs.avif";
import electric_bikes from "../../assets/electric_bikes.avif";
import ScrollLink from "common/Links/Scroll_link";
import Navbar from "common/navigation/navbar";

const Homepage: FC = () => {

	return (
		<main className="w-full bg-[#e9ecf3]">


		{/* Nav */}
		<Navbar />


		{/* Hero */}
		<section className="flex w-full flex-col items-center justify-center gap-8">
			<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 px-4 sm:static sm:grid-cols-2 sm:px-6 lg:px-8 ">
				<div>
					<h1 className="text-6xl font-bold">Begin your <br/> journey outdoors</h1>
					<p className="mt-6 text-xl">Do you want to get off of the pavement and <br/> 
					onto some dirt? Whether it's trail riding, <br/> 
					camping, or mudding, find a vehicle to rent  <br/> 
					that suits your needs here.
					</p>
				</div>

				<div>
					<img src={hero} alt="hero" className=" w-[150px] rounded-t-[50%] sm:w-[500px]" />
				</div>
				


				<div>
					<img src={hero2} alt="hero" className=" w-[150px]  sm:w-[400px]" />
				</div>
				<div>
					<h1 className="text-6xl font-bold">About Us</h1>
					<p className="mt-6 max-w-[400px] text-xl">
						Borrowed is a peer-to-peer recreational vehicle sharing platform 
						that allows owners to rent out their outdoor vehicles to 
						adventurers looking to explore the great outdoors. With a wide range of vehicles to choose from, we provide a convenient way to experience the thrill of camping, road trips, and outdoor adventures.
					</p>
				</div>
			</div>

		</section>

		{/* Vehicles */}
		<section className="mt-8 flex w-full flex-col items-center justify-center bg-[#0b1524] pb-8">
			<h1 className="my-10 text-[40px] font-bold text-white">Which vehicle do you need?</h1>
			<div className="grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
				<div className="flex flex-col items-center justify-center gap-2">
					<img src={utv} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/utv" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">UTVs</ScrollLink>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<img src={atv} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/atv" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">ATVs</ScrollLink>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<img src={dirt_bikes} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/dirbike" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">Dirt Bikes</ScrollLink>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<img src={campers} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/utv" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">UTVs</ScrollLink>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<img src={rvs} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/utv" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">UTVs</ScrollLink>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<img src={electric_bikes} alt="hero" className=" w-[150px] md:w-[350px]" />
					<ScrollLink to="/vehicles/utv" className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-4xl font-bold text-white">UTVs</ScrollLink>
				</div>

			</div>
		</section>


		{/* Want to rent? */}
		<section className="flex w-full flex-col items-center justify-center gap-10 bg-white py-12">	
			<h1 className="mt-10 text-[60px] font-bold text-[#0b1524]">Want to rent your vehicle?</h1>
			<p className="text-[30px] text-[#0b1524]">Submit your recreational vehicle for rent and start earning money!</p>
			<button className="w-fit rounded-3xl bg-[#3d6298] px-8 py-1 text-2xl font-bold text-white">Submit</button>
		</section>

		{/* Contact us */}
		<section>
			<div className="relative isolate ">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
			<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
				<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
				<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2">
					<svg
					className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
					aria-hidden="true"
					>
					<defs>
						<pattern
						id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
						width={200}
						height={200}
						x="100%"
						y={-1}
						patternUnits="userSpaceOnUse"
						>
						<path d="M130 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" strokeWidth={0} fill="white" />
					<svg x="100%" y={-1} className="overflow-visible fill-gray-50">
						<path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
					</svg>
					<rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
					</svg>
				</div>
				<h2 className="text-[40px] font-bold tracking-tight text-gray-900">Contact Us</h2>
				<dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
					<div className="flex gap-x-4">
					<dt className="flex-none">
						<span className="sr-only">Address</span>
						<HiBuildingOffice2 className="h-7 w-6 text-gray-400" aria-hidden="true" />
					</dt>
					<dd>
						545 Mavis Island
						<br />
						Chicago, IL 99191
					</dd>
					</div>
					<div className="flex gap-x-4">
					<dt className="flex-none">
						<span className="sr-only">Telephone</span>
						<HiPhone className="h-7 w-6 text-gray-400" aria-hidden="true" />
					</dt>
					<dd>
						<a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
						+1 (555) 234-5678
						</a>
					</dd>
					</div>
					<div className="flex gap-x-4">
					<dt className="flex-none">
						<span className="sr-only">Email</span>
						<HiEnvelope className="h-7 w-6 text-gray-400" aria-hidden="true" />
					</dt>
					<dd>
						<a className="hover:text-gray-900" href="mailto:hello@example.com">
						info@borrowedit.com
						</a>
					</dd>
					</div>
				</dl>
				</div>
			</div>
			<form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
				<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
					<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
						First name
					</label>
					<div className="mt-2.5">
						<input
						type="text"
						name="first-name"
						id="first-name"
						autoComplete="given-name"
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					</div>
					<div>
					<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
						Last name
					</label>
					<div className="mt-2.5">
						<input
						type="text"
						name="last-name"
						id="last-name"
						autoComplete="family-name"
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					</div>
					<div className="sm:col-span-2">
					<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
						Email
					</label>
					<div className="mt-2.5">
						<input
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					</div>
					<div className="sm:col-span-2">
					<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
						Phone number
					</label>
					<div className="mt-2.5">
						<input
						type="tel"
						name="phone-number"
						id="phone-number"
						autoComplete="tel"
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					</div>
					<div className="sm:col-span-2">
					<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
						Message
					</label>
					<div className="mt-2.5">
						<textarea
						name="message"
						id="message"
						rows={4}
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						defaultValue={''}
						/>
					</div>
					</div>
				</div>
				<div className="mt-8 flex justify-end">
					<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
					Send message
					</button>
				</div>
				</div>
			</form>
			</div>
		</div>



		</section>

			
		</main>
	);
};

export default Homepage;
