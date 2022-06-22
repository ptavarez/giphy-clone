import { useEffect, useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { IGif } from '@giphy/js-types';
import useRequest from '../hooks/use-request';

interface SearchBarProps {
	setErrors: (error: Error | null) => void;
	setGifList: (gifList: IGif[]) => void;
	setIsLoading: (isLoading: boolean) => void;
}

const SearchBar = ({ setErrors, setGifList, setIsLoading }: SearchBarProps) => {
	const [keyword, setKeyword] = useState('');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	const { doRequest, errors } = useRequest({
		method: 'get',
		onSuccess: (res) => {
			setErrors(null);
			setIsLoading(false);
			setGifList(res.data);
		},
	});

	useEffect(() => {
		if (errors) {
			setIsLoading(false);
			setErrors(errors);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors]);

	return (
		<Paper
			component='form'
			sx={{
				display: 'flex',
				alignItems: 'center',
				m: '20px 0',
				p: '2px',
			}}
			onSubmit={(event: React.FormEvent) => {
				event.preventDefault();
				setIsLoading(true);
				doRequest(
					`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
				);
			}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search all the GIFs'
				inputProps={{ 'aria-label': 'Search GIFs' }}
				onChange={handleChange}
				value={keyword}
			/>
			<IconButton type='submit'>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
