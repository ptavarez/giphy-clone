import { Box, Button, Link } from '@mui/material';
import giphyLogo from '../../assets/giphyLogo-27.png';

const Header = () => {
	return (
		<header style={{ position: 'relative' }}>
			<Link
				href='#main'
				sx={{
					bgcolor: 'background.paper',
					left: '0',
					position: 'absolute',
					transform: ' translateY(-200%)',
					'&:focus': {
						transform: ' translateY(0)',
					},
				}}
			>
				Skip To Main
			</Link>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<img src={giphyLogo} alt='Giphy Logo' />
				</Box>
				<Box>
					<Button>Trending</Button>
					<Button>Random</Button>
				</Box>
			</Box>
		</header>
	);
};

export default Header;
