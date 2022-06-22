import { useContext, useEffect, useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { GifContext } from '../context';
import { useRequest } from '../hooks';

const SearchBar = () => {
	const { setError, setGifList, setIsLoading, setTitle } =
		useContext(GifContext);
	const [keyword, setKeyword] = useState('');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	const { doRequest, error } = useRequest({
		method: 'get',
		onSuccess: (res) => {
			setTitle(keyword);
			setError(null);
			setIsLoading(false);
			setGifList(res.data);
			setKeyword('');
		},
	});

	useEffect(() => {
		if (error) {
			setIsLoading(false);
			setKeyword('');
			setError(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

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
					`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}`
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
