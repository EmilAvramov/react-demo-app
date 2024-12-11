import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartList } from '../partials/CartList';
import { Button } from '@mui/material';
import Toastify from 'toastify-js';

export const ShoppingCart: React.FC = () => {
	const cartContext = useContext(CartContext);

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

			{cartContext?.lineItems && cartContext?.lineItems.length > 0 && (
				<div className='cart-submit-container'>
					<Button
						variant='outlined'
						onClick={() => {
							Toastify({
								text: 'Order Submitted',
								duration: 2000,
								gravity: 'top',
								stopOnFocus: true,
								style: {
									background: 'linear-gradient(to right, #00b09b, #96c93d)',
									textAlign: 'center',
								},
							}).showToast();
						}}
					>
						Submit Order
					</Button>
				</div>
			)}
		</div>
	);
};
