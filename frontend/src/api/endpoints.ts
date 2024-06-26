const BASE_URL = import.meta.env.VITE_REACT_APP_API_ENDPOINT;

export const API_ENDPOINTS = {
	REGISTER: BASE_URL + "/auth/signup",
	LOGIN: BASE_URL + "/auth/login",
	SESSION: BASE_URL + "/auth/session",
};
