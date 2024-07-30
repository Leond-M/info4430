import { API_ENDPOINTS } from "api/endpoints";
import axios, { AxiosRequestConfig } from "axios";

export type Listing = {
	img_id: number;
	title: string;
	description: string;
	price: number;
	location: string;
	is_bookmarked: boolean;
	id: string;
	vehicle_type: string;
	start_date_time: string;
	end_date_time: string;
	owner_id: string;
	renter_id: string;
	rent_start_date_time: string;
	rent_end_date_time: string;
};


export const queryListings = (vehicleType: string): Promise<Listing[]> => {
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: API_ENDPOINTS.LISTINGS,
		withCredentials: true,
		params: {
			type: vehicleType,
		},
	};
	return axios(conf).then((res) => res.data);
};

export const queryListing = (data: {vehicleType: string, listingId: string}): Promise<Listing> => {
	const {vehicleType, listingId} = data;
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: `${API_ENDPOINTS.LISTING}`,
		withCredentials: true,
		params: {
			vehicle_type: vehicleType,
			listing_id: listingId,
		},
	};
	return axios(conf).then((res) => res.data);
}

export const queryMyListings = (): Promise<Listing[]> => {
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: API_ENDPOINTS.MY_LISTINGS,
		withCredentials: true,
	};
	return axios(conf).then((res) => res.data);
};


export const putListing = (data: {
	price: number;
	description: string;
	vehicle_type: string;
	start_date_time: string;
	end_date_time: string;
	location: string;
	id: string;
}): Promise<string> => {
	const {price, description, vehicle_type, start_date_time, end_date_time, id, location} = data;
	const conf: AxiosRequestConfig = {
		method: "PUT",
		url: API_ENDPOINTS.LISTING,
		withCredentials: true,
		data: {
			price: Number(price),
			description,
			vehicle_type,
			start_date_time,
			end_date_time,
			id: id || "",
			location,
		},
	};
	return axios(conf).then((res) => res.data);
}


export const queryBorrowed = (): Promise<Listing[]> => {
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: API_ENDPOINTS.RENTED,
		withCredentials: true,
	};
	return axios(conf).then((res) => res.data);
};