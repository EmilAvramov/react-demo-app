import type { IBook } from '@book-app-types';
import { Input } from '@mui/material';
import { useState } from 'react';
import { mockData } from '../database';

interface ISearchbarProps {
	setBooks: React.Dispatch<React.SetStateAction<IBook[] | undefined>>;
}

export const SearchBar: React.FC<ISearchbarProps> = ({ setBooks }) => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className='books-search-bar'>
			<Input
				placeholder='Start typing...'
				value={searchValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const searchString = e.target.value.toLowerCase();
					if (searchString.length > 0) {
						const filteredData = mockData.filter(
							(dbi) =>
								dbi.title.toLowerCase().includes(searchString) ||
								dbi.author.toLowerCase().includes(searchString)
						);
						setBooks(filteredData);
					} else {
						setBooks(mockData);
					}

					setSearchValue(searchString);
				}}
			/>
		</div>
	);
};
