import axios, { AxiosError } from 'axios';
import { useState } from 'react';

interface UseRequestParams {
	url: string;
	method: 'get' | 'post' | 'put' | 'delete';
	data?: object;
	isServer?: boolean;
	onSuccess?: (response: any) => void;
}

const useRequest = ({ url, method, data, onSuccess }: UseRequestParams) => {
	const [errors, setErrors] = useState<AxiosError | null>(null);

	const doRequest = async () => {
		try {
			setErrors(null);

			const response = await axios({
				baseURL: 'https://api.giphy.com/v1/gifs/',
				url,
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
