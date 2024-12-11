import type { IBookLineItem } from '@book-app-types';
import { createContext, useState } from 'react';
import { mockData } from '../database';
import Toastify from 'toastify-js';

interface ICartContext {
	lineItems?: IBookLineItem[];
	addItemToCart: (item: IBookLineItem) => void;
	removeItemFromCart: (id: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<ICartContext | null>(null);

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [lineItems, setLineItems] = useState<IBookLineItem[]>();

	const addItemToCart = (item: IBookLineItem) => {
		const dbItem = mockData.find((dbi) => dbi.id === item.id);

		// error
		if (!dbItem) return;

		// message, stock depleted
		if (dbItem.stock === 0) {
			Toastify({
				text: 'Insufficient stock quantity',
				duration: 1500,
				gravity: 'top',
				stopOnFocus: true,
				style: {
					background: 'linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)',
					textAlign: 'center',
					color: 'white',
					position: 'absolute',
					right: '0',
					padding: '1rem 2rem',
				},
			}).showToast();
			return;
		}

		setLineItems((lineItems) => {
			if (!lineItems?.length) return [item];

			const itemIndex = lineItems.findIndex((li) => li.id === item.id);
			const dbItemIndex = mockData.findIndex((dbi) => dbi.id === item.id);

			if (itemIndex > -1) {
				const updatedItems = [...lineItems];
				updatedItems[itemIndex].quantity += item.quantity;
				mockData[dbItemIndex].stock -= 1;
				return updatedItems;
			}
			mockData[dbItemIndex].stock -= 1;
			return [...lineItems, item];
		});
	};

	const removeItemFromCart = (id: number) => {
		const dbItem = mockData.find((dbi) => dbi.id === id);

		// error
		if (!dbItem) return;

		setLineItems((lineItems) => {
			// error or message
			if (!lineItems?.length) return [];

			const item = lineItems.find((li) => li.id === id);

			// error or message
			if (!item) return lineItems;

			const dbItemIndex = mockData.findIndex((dbi) => dbi.id === id);

			if (item.quantity === 1) {
				mockData[dbItemIndex].stock += 1;
				return lineItems.filter((li) => li.id !== id);
			}

			const itemIndex = lineItems.findIndex((li) => li.id === item.id);
			const updatedItems = [...lineItems];
			updatedItems[itemIndex].quantity -= 1;
			mockData[dbItemIndex].stock += 1;
			return updatedItems;
		});
	};

	return (
		<CartContext.Provider value={{ lineItems, addItemToCart, removeItemFromCart }}>
			{children}
		</CartContext.Provider>
	);
};
