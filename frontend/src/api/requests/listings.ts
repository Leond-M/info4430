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