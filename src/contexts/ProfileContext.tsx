import type { IProfile } from '@book-app-types';
import { createContext, useState } from 'react';

interface IProfileContext {
	profile?: IProfile;
	setProfile: React.Dispatch<React.SetStateAction<IProfile | undefined>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext<IProfileContext | null>(null);

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [profile, setProfile] = useState<IProfile>();

	return (
		<ProfileContext.Provider value={{ profile, setProfile }}>{children}</ProfileContext.Provider>
	);
};
