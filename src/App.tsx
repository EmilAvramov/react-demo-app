import { CartContextProvider } from './contexts/CartContext';
import { ProfileContextProvider } from './contexts/ProfileContext';
import { Router } from './Router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ProfileContextProvider>
					<CartContextProvider>
						<Router />
					</CartContextProvider>
				</ProfileContextProvider>
			</LocalizationProvider>
		</>
	);
}

export default App;
