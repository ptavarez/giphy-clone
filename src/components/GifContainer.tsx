import { useContext } from 'react';
import { Box } from '@mui/material';
import { GifContext } from '../context';

const GifContainer = () => {
	const { gifList } = useContext(GifContext);

	return (
		<Box
			sx={{
				display: 'flex',
				maxWidth: '100vw',
				flexWrap: 'wrap',
				justifyContent: 'center',
				overflow: 'hidden',
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
