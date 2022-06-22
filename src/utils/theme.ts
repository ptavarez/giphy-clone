import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				textPrimary: {
					color: '#fff',
				},
			},
		},
	},
	palette: {
		mode: 'dark',
	},
	typography: {
		fontFamily: ['poppins', 'sans-serif'].join(','),
	},
});

export default theme;
