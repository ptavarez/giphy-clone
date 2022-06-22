import { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress } from '@mui/material';
import { IGif } from '@giphy/js-types';
import { GifState } from './context';
import GifContainer from './components/GifContainer';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import useRequest from './hooks/use-request';

export default function App() {
	const [gifList, setGifList] = useState<IGif[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
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
				setError,
				setGifList,
				setIsLoading,
			}}
		>
			<Layout>
				<SearchBar />
				<Box sx={{ minHeight: '100vh' }}>
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
						<Box sx={{ minHeight: 'calc(100vh - 37px)' }}>
							<GifContainer />
						</Box>
					)}
				</Box>
			</Layout>
		</GifState>
	);
}
