import { useContext, useEffect } from 'react';
import { Box, Button, Link } from '@mui/material';
import { IGif } from '@giphy/js-types';
import { GifContext } from '../../context';
import { useRequest, useWindowDimensions } from '../../hooks';
import giphyLogo from '../../assets/giphyLogo-27.png';
import {
	MOTIVATION_URL,
	RANDOM_URL,
	TRENDING_URL,
} from '../../utils/constants';

const Header = () => {
	const { setError, setGifList, setIsLoading, setTitle } =
		useContext(GifContext);
	const { doRequest, error } = useRequest({
		method: 'get',
		onSuccess: (res: { data: IGif[] }) => {
			setError(null);
			setIsLoading(false);
			setGifList(res.data);
		},
	});
	const { width } = useWindowDimensions();
	const isMobile = width >= 425;

	useEffect(() => {
		if (error) {
			setIsLoading(false);
			setError(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	const handleClick = (url: string) => {
		switch (url) {
			case TRENDING_URL:
				setTitle('Trending');
				break;
			case RANDOM_URL:
				setTitle('Random');
				break;
			case MOTIVATION_URL:
				setTitle('Motivation');
				break;
			default:
				setTitle('');
				break;
		}
		setIsLoading(true);
		doRequest(url);
	};

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
					height: '35px',
				}}
			>
				<Box>
					<img src={giphyLogo} alt='Giphy Logo' />
				</Box>
				{isMobile && (
					<Box>
						<Button onClick={() => handleClick(TRENDING_URL)}>Trending</Button>
						<Button onClick={() => handleClick(MOTIVATION_URL)}>
							Motivation
						</Button>
						<Button onClick={() => handleClick(RANDOM_URL)}>Random</Button>
					</Box>
				)}
			</Box>
		</header>
	);
};

export default Header;
