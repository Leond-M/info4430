import { Listing } from "api/requests/listings";
import DateRangePickerCalendar from "common/calendars/Date_range_picker";
import { FC, useEffect, useState } from "react";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";

import noimage from "assets/noimage.webp";
import VehicleTypeDropdown from "./Vehicle_type_dropdown";
import { usePutListing } from "api/actions/listings";
import { CircularProgress } from "@mui/material";
import { assets } from "common/cars";


type Props = {
	data?: Listing | null;
}

const vTypes = [
	{value: "utv", label: "UTV"},
	{value: "atv", label: "ATV"},
	{value: "dirtbike", label: "Dirtbike"},
	{value: "camper", label: "Camper"},
	{value: "boat", label: "Boat"},
	{value: "jetski", label: "Jet Ski"},
	{value: "ebike", label: "Electric Bike"},
	{value: "rv", label: "RV"},
	{value: "other", label: "Other"},
]

const ManageRentalCar: FC<Props> = ({data}) => {


	const [startDate, setStartDate] = useState<Date>(new Date(data?.start_date_time || new Date()));
	const [endDate, setEndDate] = useState<Date>(new Date(data?.end_date_time ||new Date(new Date().setDate(new Date().getDate() + 7))));

	const [price, setPrice] = useState(Number(data?.price || 0));
	const [description, setDescription] = useState(data?.description || "");

	const [vehicleType, setVehicleType] = useState(data?.vehicle_type || "utv");

	const [location, setLocation] = useState(data?.location || "");

	const [err, setErr] = useState<string>("");

	const [newFile, setNewFile] = useState<File | null>(null);

	const {mutate, isPending} = usePutListing();


	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.files){
			setNewFile(e.target.files[0]);
		}
	}

	const handleDateChange = (start: Date, end: Date) => {
		setStartDate(start);
		setEndDate(end);
	}

	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(parseInt(e.target.value));
	}

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value);
	}

	const handleVehicleTypeChange = (type: string) => {
		setVehicleType(type);
	}

	const handleSaveChanges = () => {
		//validate
		if(price <= 0){
			setErr("Price must be greater than 0");
			return;
		}

		if(description.length < 10){
			setErr("Description must be at least 10 characters");
			return;
		}

		if(startDate.getTime() >= endDate.getTime()){
			setErr("Start date must be before end date");
			return;
		}

		if(!vTypes.find(v => v.value === vehicleType)){
			setErr("Invalid vehicle type");
			return;
		}

		mutate({
			price: price,
			description,
			vehicle_type: vehicleType,
			start_date_time: startDate.toISOString(),
			end_date_time: endDate.toISOString(),
			id: data?.id || "",
			location: location,
		})

		setErr("");
		
	}

	useEffect(() => {

		setStartDate(new Date(data?.start_date_time || new Date()));
		setEndDate(new Date(data?.end_date_time ||new Date(new Date().setDate(new Date().getDate() + 7))));
		setPrice(data?.price || 0);
		setDescription(data?.description || "");
		setVehicleType(data?.vehicle_type || "utv");
		setLocation(data?.location || "");

	}, [data])

	return (
		<main className="mx-16 mt-10 rounded-lg border-2 border-black px-4 py-10">
			<div className="mb-2 flex flex-row gap-3">
				{/* Icon and title */}
				<BsFillWrenchAdjustableCircleFill className="size-10 text-black" />
				<h1 className="text-3xl font-semibold">Vehicle</h1>
			</div>

		{/* Divider */}
		<hr className="mb-5 w-full border border-solid border-black"/>
			<div className="flex flex-col items-center justify-center gap-5 py-5 sm:flex-row sm:gap-20">

				<section className="flex flex-col gap-5">
					{/* Image */}
					<div className="flex flex-col">
						{!newFile && <img src={data? assets[data.vehicle_type]?.[data.img_id] : noimage} alt="vehicle" className=" w-[300px]  sm:w-[350px] md:w-[450px]" />}
						{newFile && <img src={URL.createObjectURL(newFile)} alt="vehicle" className=" w-[300px]  sm:w-[350px] md:w-[450px]" />}
					</div>

					{/* Change Image */}
					<div className="flex flex-row gap-5">

						<input 
							className="flex flex-row gap-5"
							type="file"
							accept="image/*"
							onChange={handleFileChange}
						/>
					</div>

					<textarea
					className="h-[200px] w-full rounded-md border-2 border-black"
					placeholder="Description"
					value={description}
					onChange={handleDescriptionChange}
					/>

					{/* Vehicle location */}
					<h1 className="text-2xl font-semibold">Location</h1>
					<input 
						type="text" 
						className="h-10 w-full rounded-md border-2 border-black"
						placeholder="Location"
						value={location}
						onChange={e => setLocation(e.target.value)}
					/>


					<VehicleTypeDropdown vehicleType={vehicleType} handler={handleVehicleTypeChange} />

				</section>

				{/* Calendar */}
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-center gap-5">
						<h1 className="text-2xl font-semibold">Select Dates</h1>
						<DateRangePickerCalendar startDate={startDate} endDate={endDate} handler={handleDateChange} />
					</div>

					{/* Change Price Input*/}
					<div className="mt-10 flex flex-row gap-5">
						<h1 className="text-2xl font-semibold">Change Price per Day</h1>
						<input 
							type="number" 
							className="h-10 w-[200px] rounded-md border-2 border-black text-right"
							placeholder="$100"
							value={price}
							onChange={handlePriceChange}
						/>
					</div>

					<button 
						className="mt-10 rounded-lg bg-[#6db1ff] px-5 py-4  text-2xl font-bold text-black hover:bg-blue-300"
						onClick={handleSaveChanges}
						disabled={isPending}
						>
							{isPending? <CircularProgress size={20} />: "Save Changes"}
					</button>
					<div className="mt-5 text-red-500">{err}</div>
				</div>
			</div>
		</main>
	)
}

export default ManageRentalCar;