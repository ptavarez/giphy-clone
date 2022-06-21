import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			Giphy {new Date().getFullYear()}.
		</Typography>
	);
}

export default function App() {
	return (
		<Container maxWidth='sm'>
			<Box sx={{ my: 4 }}>
				<Typography variant='h5' component='h1' gutterBottom>
					Create React App with TypeScript and MUI
				</Typography>
				<Copyright />
			</Box>
		</Container>
	);
}
