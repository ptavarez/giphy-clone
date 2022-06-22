import { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import { IGif } from '@giphy/js-types';
import { GifState } from './context';
import { useRequest } from './hooks';
import GifContainer from './components/GifContainer';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

export default function App() {
	const [gifList, setGifList] = useState<IGif[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [title, setTitle] = useState('');
	const isGifListEmpty = gifList?.length === 0;

	const { doRequest, error: trendingError } = useRequest({
		method: 'get',
		onSuccess: (res) => {
			setError(null);
			setIsLoading(false);
			setGifList(res.data);
		},
	});

	useEffect(() => {
		setIsLoading(true);
		doRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => {
			if (trendingError) {
				setIsLoading(false);
				setError(trendingError);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[trendingError]
	);

	return (
		<GifState
			value={{
				error,
				gifList,
				isLoading,
				title,
				setError,
				setGifList,
				setIsLoading,
				setTitle,
			}}
		>
			<Layout>
				<SearchBar />
				<Box sx={{ minHeight: 'calc(100vh - 40px)' }}>
					{isGifListEmpty && <Alert severity='info'>No results found</Alert>}
					{error && <Alert severity='error'>{error.message}</Alert>}
					{isLoading ? (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								mb: '20px',
							}}
						>
							<CircularProgress />
						</Box>
					) : (
						<>
							<Typography
								variant='h4'
								component='h1'
								sx={{ mb: '20px', fontWeight: '900' }}
							>
								{title}
							</Typography>
							<GifContainer />
						</>
					)}
				</Box>
			</Layout>
		</GifState>
	);
}
