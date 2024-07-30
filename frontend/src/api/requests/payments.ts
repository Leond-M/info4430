import { API_ENDPOINTS } from "api/endpoints";
import axios, { AxiosRequestConfig } from "axios";



export const postPaymentIntent = async (body: { 
	price: string,
	vehicle_type: string,
	id: string,
	start_date: string,
	end_date: string,

}): Promise<{client_secret: string}> => {
	const conf: AxiosRequestConfig = {
		method: "POST",
		url: API_ENDPOINTS.PAYMENT_INTENT,
		data: body,
		withCredentials: true,
	};

	return axios(conf).then((res) => res.data);
};