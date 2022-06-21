import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container className='layout' sx={{ m: '10px 0' }}>
			<Header />
			<main id='main'>{children}</main>
			<Footer />
		</Container>
	);
};

export default Layout;
