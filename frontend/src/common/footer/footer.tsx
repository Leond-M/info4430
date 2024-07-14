

const Footer = () => {
	  return (
	<footer className="mb-5 mt-auto flex w-full flex-col gap-4 px-10">
	  <div className="mt-10 flex w-full flex-row justify-center">
		<h1 className="text-3xl font-bold">Contact Us</h1>
	  </div>
	  <div className="grid w-full grid-cols-3 items-center justify-between">
		<p className=" text-2xl font-semibold text-gray-900">Email: support@borrowed.com</p>
		<p className="mx-auto text-2xl font-semibold text-gray-900">Phone: 1-800-555-5555</p>
		<p className="text-right text-2xl font-semibold text-gray-900">Hours of Operation: Never</p>
	  </div>
	  <div className="mt-5 flex w-full flex-row justify-between">
		<p className="text-2xl font-semibold text-gray-900">2024 Borrowed LLC</p>
		<a href="https://www.google.com" target="_blank" rel="noreferrer"  className="text-2xl font-semibold text-gray-900 hover:underline">Privacy Policy</a>
		<a href="https://www.google.com" target="_blank" rel="noreferrer" className="text-2xl font-semibold text-gray-900 hover:underline">Terms & Conditions</a>
	  </div>
	  
	</footer>
  );
};

export default Footer;