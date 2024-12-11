import { IProfile } from '@book-app-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../utils/validationSchemas';
import { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import { Button, Input } from '@mui/material';

export const Profile: React.FC = () => {
	const profileContext = useContext(ProfileContext);
	const [editMode, setEditMode] = useState(false);

	const {
		register,
		getValues,
		formState: { errors },
	} = useForm<IProfile>({
		resolver: yupResolver(profileSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			firstName: profileContext?.profile?.firstName ?? '',
			lastName: profileContext?.profile?.lastName ?? '',
			email: profileContext?.profile?.email ?? '',
			dateOfBirth: profileContext?.profile?.dateOfBirth ?? '',
		},
	});

	return (
		<div className='profile-page'>
			{profileContext?.profile?.firstName && profileContext.profile.lastName && (
				<div className='profile-greeting'>
					{`Hello 
					${profileContext?.profile?.firstName.slice(0, 1)}${profileContext?.profile?.lastName.slice(0, 1)}!
					`}
				</div>
			)}
			<form>
				<Input
					{...register('firstName')}
					placeholder='First Name'
					type='text'
					disabled={!editMode}
				/>
				{errors.firstName && <p>{errors.firstName.message}</p>}
				<Input
					{...register('lastName')}
					type='text'
					placeholder='Last Name'
					disabled={!editMode}
				/>
				{errors.lastName && <p>{errors.lastName.message}</p>}
				<Input
					{...register('email')}
					type='email'
					placeholder='Email'
					disabled={!editMode}
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<Button
					onClick={() => {
						if (editMode) {
							const formValues = getValues();
							profileContext?.setProfile(formValues);
						}
						setEditMode((prev) => !prev);
					}}
					variant='outlined'
				>
					{editMode ? 'Save' : 'Edit'}
				</Button>
			</form>
		</div>
	);
};
