import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				textPrimary: {
					color: '#fff',
				},
			},
		},
	},
});

export default theme;
