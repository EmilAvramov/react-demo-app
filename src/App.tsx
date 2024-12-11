import { CartContextProvider } from './contexts/CartContext';
import { ProfileContextProvider } from './contexts/ProfileContext';
import { Router } from './Router';

function App() {
	return (
		<>
			<ProfileContextProvider>
				<CartContextProvider>
					<Router />
				</CartContextProvider>
			</ProfileContextProvider>
		</>
	);
}

export default App;
