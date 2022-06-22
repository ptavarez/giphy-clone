import { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress } from '@mui/material';
import { IGif } from '@giphy/js-types';
import useRequest from '../hooks/use-request';

const GifContainer = () => {
	const [gifList, setGifList] = useState<IGif[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const { doRequest, errors } = useRequest({
		url: `/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`,
		method: 'get',
		onSuccess: (res) => {
			setIsLoading(false);
			setGifList(res.data);
		},
	});

	useEffect(() => {
		setIsLoading(true);
		doRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (errors) return <Alert severity='error'>{errors.message}</Alert>;

	return (
		<Box>
			{isLoading ? (
				<Box
					sx={{
						display: 'flex',
						position: 'fixed',
						left: '50%',
						top: '50%',
					}}
				>
					<CircularProgress />
				</Box>
			) : (
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
			)}
		</Box>
	);
};

export default GifContainer;
