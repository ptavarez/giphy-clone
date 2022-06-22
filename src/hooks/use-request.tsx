import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { GREETINGS_URL } from '../utils/constants';

interface UseRequestParams {
	method: 'get' | 'post' | 'put' | 'delete';
	data?: object;
	isServer?: boolean;
	onSuccess?: (response: any) => void;
}

const useRequest = ({ method, data, onSuccess }: UseRequestParams) => {
	const [error, setError] = useState<AxiosError | null>(null);

	const doRequest = async (url?: string) => {
		try {
			setError(null);
			const response = await axios({
				baseURL: 'https://api.giphy.com/v1/gifs/',
				url: url || GREETINGS_URL,
				data,
				method,
			});

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (error: any) {
			setError(error);
		}
	};

	return { doRequest, error };
};

export default useRequest;
