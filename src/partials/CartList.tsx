import { IBookLineItem } from '@book-app-types';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

interface ICartList {
	lineItems?: IBookLineItem[];
}

export const CartList: React.FC<ICartList> = ({ lineItems }) => {
	const cartContext = useContext(CartContext);

	return (
		<div className='cart-li-container'>
			{lineItems?.map((li, index) => {
				return (
					<div
						className='cart-li-item'
						key={index}
					>
						<p>Book Title: {li.name}</p>
						<p>Total price: {li.price * li.quantity}</p>
						<div className='cart-li-quantity'>
							<RemoveIcon
								onClick={() => {
									cartContext?.removeItemFromCart(li.id);
								}}
							/>
							<p>{li.quantity}</p>
							<AddIcon
								onClick={() => {
									cartContext?.addItemToCart({
										id: li.id,
										name: li.name,
										price: li.price,
										quantity: 1,
									});
								}}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
