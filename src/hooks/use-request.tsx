import axios, { AxiosError } from 'axios';
import { useState } from 'react';

const DEFAULT_URL = `/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

interface UseRequestParams {
	method: 'get' | 'post' | 'put' | 'delete';
	data?: object;
	isServer?: boolean;
	onSuccess?: (response: any) => void;
}

const useRequest = ({ method, data, onSuccess }: UseRequestParams) => {
	const [errors, setErrors] = useState<AxiosError | null>(null);

	const doRequest = async (url?: string) => {
		try {
			setErrors(null);

			const response = await axios({
				baseURL: 'https://api.giphy.com/v1/gifs/',
				url: url || DEFAULT_URL,
				data,
				method,
			});

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (error: any) {
			setErrors(error);
		}
	};

	return { doRequest, errors };
};

export default useRequest;
