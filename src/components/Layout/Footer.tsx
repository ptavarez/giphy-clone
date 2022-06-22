import { Typography } from '@mui/material';

const Footer = () => {
	return (
		<footer style={{ margin: '20px 0' }}>
			<Typography variant='body2' color='text.secondary' align='center'>
				All Fun Reserved {new Date().getFullYear()}.
			</Typography>
		</footer>
	);
};

export default Footer;
