import { IBook } from '@book-app-types';
import { useEffect, useState } from 'react';
import { mockData } from '../database';
import { SearchBar } from '../components/SearchBar';
import { BookList } from '../partials/BookList';

export const Books: React.FC = () => {
	const [books, setBooks] = useState<IBook[]>();
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (firstRender) {
			setBooks(mockData);
			setFirstRender(false);
		}
	}, [books, firstRender]);

	return (
		<div className='books-page'>
			<SearchBar setBooks={setBooks} />
			<BookList books={books} />
		</div>
	);
};
