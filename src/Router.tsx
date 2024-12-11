import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Books } from './pages/Books';
import { Profile } from './pages/Profile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';

export const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className='root'>
				<main>
					<Routes>
						<Route
							path='/'
							element={<Books />}
						/>
						<Route
							path='/profile'
							element={<Profile />}
						/>
					</Routes>
				</main>
				<aside>
					<ShoppingCart />
				</aside>
			</div>
			<Footer />
		</BrowserRouter>
	);
};
