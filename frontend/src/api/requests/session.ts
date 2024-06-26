import { API_ENDPOINTS } from "api/endpoints";
import axios, { AxiosRequestConfig } from "axios";

type Session = {
	email: string;
	token: string;
};

export const refreshSession = (): Promise<{ email: string; token: string }> => {
	const conf: AxiosRequestConfig = {
		method: "GET",
		url: API_ENDPOINTS.SESSION,
		withCredentials: true,
	};
	return axios(conf).then((res) => res.data);
};

export const queryLogin = async (body: { email: string; password: string }): Promise<Session> => {
	const conf: AxiosRequestConfig = {
		method: "POST",
		url: API_ENDPOINTS.LOGIN,
		data: {
			email: body.email.toLowerCase().trim(),
			password: body.password.trim(),
		},
		withCredentials: true,
	};

	return axios(conf).then((res) => res.data);
};

export const queryLogout = (): Promise<void> => {
	const conf: AxiosRequestConfig = {
		method: "DELETE",
		url: API_ENDPOINTS.SESSION,
		withCredentials: true,
	};
	return axios(conf).then((res) => res.data);
};

export const queryRegister = (body: { email: string; password: string }): Promise<Session> => {
	const conf: AxiosRequestConfig = {
		method: "POST",
		url: API_ENDPOINTS.REGISTER,
		data: {
			email: body.email,
			password: body.password,
		},
		withCredentials: true,
	};
	return axios(conf).then((res) => res.data);
};
