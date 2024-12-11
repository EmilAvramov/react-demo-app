import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartList } from '../partials/CartList';
import { Button } from '@mui/material';

export const ShoppingCart: React.FC = () => {
	const cartContext = useContext(CartContext);

	console.log(cartContext?.lineItems);

	return (
		<div className='cart-container'>
			<div className='cart-content'>
				{cartContext?.lineItems && cartContext?.lineItems.length > 0 && (
					<CartList lineItems={cartContext?.lineItems} />
				)}
				{!cartContext?.lineItems?.length && (
					<div>
						<p>Your cart is empty</p>
					</div>
				)}
			</div>

			<div className='cart-submit-container'>
				<Button variant='outlined'>Submit Order</Button>
			</div>
		</div>
	);
};
