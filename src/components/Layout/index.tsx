import { Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container maxWidth={false} sx={{ m: '0 auto', p: '10px' }}>
			<Header />
			<main id='main'>{children}</main>
			<Footer />
		</Container>
	);
};

export default Layout;
