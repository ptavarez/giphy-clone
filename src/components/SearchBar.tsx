import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';

const SearchBar = () => {
	const [keyword, setKeyword] = useState('');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	return (
		<Paper
			component='form'
			sx={{
				display: 'flex',
				alignItems: 'center',
				m: '20px 0',
				p: '2px',
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
