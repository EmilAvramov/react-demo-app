declare module '@book-app-types' {
	interface IBook {
		id: number;
		title: string;
		author: string;
		price: number;
		stock: number;
	}

	interface IBookLineItem {
		id: number;
		name: string;
		quantity: number;
		price: number;
	}

	interface IProfile {
		firstName: string;
		lastName: string;
		email: string;
		dateOfBirth?: string;
	}
}
