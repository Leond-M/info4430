import { API_ENDPOINTS } from "api/endpoints";
import axios, { AxiosRequestConfig } from "axios";
import { Listing } from "./listings";



export const postBookmark = async (body: { vehicle_type: string, listing_id: string}): Promise<{message: string}> => {
	const conf: AxiosRequestConfig = {
		method: "POST",
		url: API_ENDPOINTS.BOOKMARKS,
		data: body,
		withCredentials: true,
	};

	return axios(conf).then((res) => res.data);
};


export const queryBookmarks = async (): Promise<Listing[]> => {
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: API_ENDPOINTS.BOOKMARKS,
		withCredentials: true,
	};

	return axios(conf).then((res) => res.data);
};