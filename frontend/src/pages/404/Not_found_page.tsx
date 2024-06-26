import { Link } from "react-router-dom";
import puppies from "./assets/puppies404.jpg";

const NotFound = () => {
	return (
		<main>
			<div className="flex h-5/6 w-full grow flex-col items-center py-16">
				<div className="text-center">
					<h1 className="mb-8 text-7xl">404</h1>
					<h2 className=" mb-5 text-xl">Page not found</h2>
					<img alt="Resource not found" className="max-w-xl rounded-lg bg-fixed object-fill" src={puppies} />
					<Link className="" to="/">
						back to home
					</Link>
				</div>
			</div>
		</main>
	);
};

export default NotFound;
