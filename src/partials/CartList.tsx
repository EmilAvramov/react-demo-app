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
					<div key={index}>
						<p>{li.name}</p>
						<p>{li.price * li.quantity}</p>
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
				);
			})}
		</div>
	);
};
