import Avatar from "components/Avatar";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { useSession } from "api/actions/session";

const randoms = [
	[1, 2],
	[3, 4, 5],
	[6, 7],
];

function Homepage() {
	const { user, logout } = useSession();

	return (
		<main className="relative overflow-hidden bg-white">
			<section className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<div className="my-4">
							<Avatar size="large" src={logo} />
						</div>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome!</h1>
						<p className="mt-4 text-xl text-gray-500">This is a boilerplate for INFO4430</p>
					</div>

					{user?.email && (
						<div className="mt-10">
							<p className="text-xl text-gray-500">
								You are logged in as <span className="font-semibold">{user.email}</span>
							</p>
							<button
								onClick={() => logout()}
								className="mt-4 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500"
							>
								Log out
							</button>
						</div>
					)}

					{!user?.email && (
						<div className="mt-10 flex flex-row gap-4">
							<Link
								to="/register"
								className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500"
							>
								Register
							</Link>
							<Link
								to="/login"
								className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500"
							>
								Log in
							</Link>
						</div>
					)}

					<div>
						<div className="my-10">
							<div
								aria-hidden="true"
								className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										{randoms.map((random, number) => (
											<div key={`random-${random[number]}`} className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												{random.map((number) => (
													<div
														key={`random-${number}`}
														className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
													>
														<img
															src={`https://picsum.photos/600?random=${number}`}
															alt=""
															className="size-full bg-indigo-100 object-cover object-center"
														/>
													</div>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Homepage;
