import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBarMain = () => {
	  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setSearchText(event.target.value);
  };


  return (
	<main className="w-full flex-col items-center justify-center" >
		<h1 className="mx-auto  w-fit rounded-md bg-[#4c535d] px-3 py-2 text-4xl font-semibold text-white">Begin your outdoor Journey!</h1>
		<div className="mb-8 mt-3 flex items-center justify-center">
			{/* Search */}
			<div className="flex items-center justify-center rounded-3xl border-2 border-gray-300 bg-white px-3">
				<FaSearch className="text-2xl text-gray-400 " />
					<input
						type="text"
						className="w-full max-w-[400px] rounded-3xl border-none p-3 text-left focus-within:ring-0 focus:border-none focus:outline-none  "
						placeholder="Search for a vehicle"
						value={searchText}
						onChange={handleSearchTextChange}
					/>
			</div>
		</div>
	</main>
  );
}

export default SearchBarMain;