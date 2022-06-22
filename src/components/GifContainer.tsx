import { useEffect } from 'react';
import { Box } from '@mui/material';
import { IGif } from '@giphy/js-types';
import useRequest from '../hooks/use-request';

interface GifContainerProps {
	gifList: IGif[] | null;
	setErrors: (error: Error | null) => void;
	setGifList: (gifList: IGif[]) => void;
	setIsLoading: (isLoading: boolean) => void;
}

const GifContainer = ({
	gifList,
	setErrors,
	setGifList,
	setIsLoading,
}: GifContainerProps) => {
	const { doRequest, errors } = useRequest({
		method: 'get',
		onSuccess: (res) => {
			setErrors(null);
			setIsLoading(false);
			setGifList(res.data);
		},
	});

	useEffect(() => {
		setIsLoading(true);
		doRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (errors) {
			setIsLoading(false);
			setErrors(errors);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors]);

	return (
		<Box
			sx={{
				display: 'flex',
				maxWidth: '100vw',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			{gifList?.map((gif) => (
				<Box key={gif.id} sx={{ m: '0 5px' }}>
					<img src={gif.images.fixed_height.url} alt={gif.title} />
				</Box>
			))}
		</Box>
	);
};

export default GifContainer;
