/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useMemo } from 'react';
import { IGif } from '@giphy/js-types';

interface GifStateProps {
	value: {
		error: Error | null;
		gifList: IGif[];
		isLoading: boolean;
		setError: (error: Error | null) => void;
		setGifList: (gifList: IGif[]) => void;
		setIsLoading: (isLoading: boolean) => void;
	};
	children: React.ReactNode;
}

export const GifContext = createContext({
	error: null as Error | null,
	gifList: [] as IGif[],
	isLoading: false,
	setError: (error: Error | null) => {},
	setGifList: (gifList: IGif[]) => {},
	setIsLoading: (isLoading: boolean) => {},
});

export const GifState = ({ value, children }: GifStateProps) => {
	const contextValue = useMemo(() => value, [value]);

	return (
		<GifContext.Provider value={contextValue}>{children}</GifContext.Provider>
	);
};

export default GifState;
