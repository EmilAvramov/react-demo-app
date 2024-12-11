import type { IBook } from '@book-app-types';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

interface IBookListProps {
	books?: IBook[];
}

export const BookList: React.FC<IBookListProps> = ({ books }) => {
	const bookContext = useContext(CartContext);

	return (
		<div className='book-list-container'>
			{books?.map((book) => {
				return (
					<div className='book-list-item'>
						<p>{book.title}</p>
						<p>{book.author}</p>
						<p>{book.price}</p>
						<Button
							variant='outlined'
							onClick={() => {
								bookContext?.addItemToCart({
									id: book.id,
									name: book.title,
									price: book.price,
									quantity: 1,
								});
							}}
						>
							Add to Cart
						</Button>
					</div>
				);
			})}
		</div>
	);
};
