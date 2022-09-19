import { URLS } from "./config";
import axios from "axios";
const headers = {
	"Content-Type": "application/json",
};

const headerData = async () => {
	return {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	};
};
const instance = axios.create({
	timeout: 30000,
});

const responseBody = (response) => response;

export const errorBody = (err) => {
	if (err.response) {
		// Request made and server responded
		console.log("err.response", err);
		return {
			message: err.response.data.message,
			status: err.response.status,
		};
	} else if (err.request) {
		// The request was made but no response was received
		console.log("err.request", err.request);
		return "Network Failiure, Please Check your network connection!";
	} else {
		// Something happened in setting up the request that triggered an err
		console.log("err", err.message);
		return err.message;
	}
};

const requests = {
	get: (url, headers = { ...headerData() }) =>
		instance.get(url, { headers }).then(responseBody).catch(errorBody),
	post: (url, body, headers = { ...headerData }) =>
		instance.post(url, body, { headers }).then(responseBody).catch(errorBody),

	put: (url, body, headers = { ...headerData() }) =>
		instance.put(url, body, { headers }).then(responseBody).catch(errorBody),
};
export const assets = {
	getAssets: () => requests.get(`${URLS.GET_ALL_ASSETS}`),
};
