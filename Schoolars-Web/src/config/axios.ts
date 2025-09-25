/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { type RawAxiosRequestHeaders } from 'axios'

export function httpClient() {
	const headers: RawAxiosRequestHeaders = {}

	return axios.create({
		baseURL: 'http://localhost:1224/',
		timeout: 300_000,
		headers,
	})
}

export default axios
