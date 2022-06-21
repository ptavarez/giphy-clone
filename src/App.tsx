import { Box } from '@mui/system';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

export default function App() {
	return (
		<Layout>
			<SearchBar />
			<Box sx={{ minHeight: 'calc(100vh - 37px)' }} />
		</Layout>
	);
}
