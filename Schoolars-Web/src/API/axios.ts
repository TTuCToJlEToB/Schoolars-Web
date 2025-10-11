import axios, { type RawAxiosRequestHeaders } from 'axios'

export function httpClient() {
	const headers: RawAxiosRequestHeaders = {}

	return axios.create({
		baseURL: 'http://localhost:3535/',
		timeout: 300_000,
		headers,
	})
}

export default axios
