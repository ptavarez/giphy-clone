import { Typography } from '@mui/material';

const Footer = () => {
	return (
		<footer>
			<Typography variant='body2' color='text.secondary' align='center'>
				All Fun Reserved © Giphy {new Date().getFullYear()}.
			</Typography>
		</footer>
	);
};

export default Footer;
