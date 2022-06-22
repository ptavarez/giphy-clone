import { useState } from 'react';
import { Alert, Box, CircularProgress } from '@mui/material';
import { IGif } from '@giphy/js-types';
import GifContainer from './components/GifContainer';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

export default function App() {
	const [gifList, setGifList] = useState<IGif[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<Error | null>(null);
	const isGifListEmpty = gifList?.length === 0;

	return (
		<Layout>
			<SearchBar
				setErrors={setErrors}
				setGifList={setGifList}
				setIsLoading={setIsLoading}
			/>
			{isGifListEmpty && <Alert severity='info'>No results found</Alert>}
			{errors && <Alert severity='error'>{errors.message}</Alert>}
			{isLoading && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mb: '20px',
					}}
				>
					<CircularProgress />
				</Box>
			)}
			<Box sx={{ minHeight: 'calc(100vh - 37px)' }}>
				<GifContainer
					gifList={gifList}
					setErrors={setErrors}
					setGifList={setGifList}
					setIsLoading={setIsLoading}
				/>
			</Box>
		</Layout>
	);
}
