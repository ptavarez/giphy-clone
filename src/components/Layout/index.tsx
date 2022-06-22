import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container sx={{ m: '0 auto', p: '10px' }}>
			<Header />
			<main id='main'>{children}</main>
			<Footer />
		</Container>
	);
};

export default Layout;
