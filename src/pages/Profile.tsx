import { IProfile } from '@book-app-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { profileSchema } from '../utils/validationSchemas';
import { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import { Button, Input } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Toastify from 'toastify-js';

export const Profile: React.FC = () => {
	const profileContext = useContext(ProfileContext);
	const [editMode, setEditMode] = useState(false);

	const {
		control,
		register,
		handleSubmit,
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

	const submitFunction = (data: IProfile) => {
		if (editMode) {
			profileContext?.setProfile(data);
		}
		setEditMode((prev) => !prev);

		Toastify({
			text: 'Form submitted successfully',
			duration: 2000,
			gravity: 'top',
			stopOnFocus: true,
			style: {
				background: 'linear-gradient(to right, #00b09b, #96c93d)',
				textAlign: 'center',
			},
		}).showToast();
	};

	return (
		<div className='profile-page'>
			{profileContext?.profile?.firstName && profileContext.profile.lastName && (
				<div className='profile-greeting'>
					{`Hello 
					${profileContext?.profile?.firstName.slice(0, 1)}${profileContext?.profile?.lastName.slice(0, 1)}!
					`}
				</div>
			)}
			<form onSubmit={handleSubmit(submitFunction)}>
				<Input
					{...register('firstName')}
					placeholder='First Name'
					type='text'
					disabled={!editMode}
				/>
				{errors.firstName && <p className='form-error'>{errors.firstName.message}</p>}
				<Input
					{...register('lastName')}
					type='text'
					placeholder='Last Name'
					disabled={!editMode}
				/>
				{errors.lastName && <p className='form-error'>{errors.lastName.message}</p>}
				<Input
					{...register('email')}
					type='email'
					placeholder='Email'
					disabled={!editMode}
				/>
				{errors.email && <p className='form-error'>{errors.email.message}</p>}
				<Controller
					control={control}
					name='dateOfBirth'
					rules={{ required: true }}
					render={({ field }) => {
						return (
							<DateTimePicker
								label='Date'
								disabled={!editMode}
								value={dayjs(field.value)}
								inputRef={field.ref}
								onChange={(date) => {
									field.onChange(date);
								}}
							/>
						);
					}}
				/>
				{editMode && (
					<Button
						variant='outlined'
						type='submit'
					>
						Save
					</Button>
				)}
			</form>
			{!editMode && (
				<div className='form-edit-button'>
					<Button
						variant='outlined'
						onClick={() => {
							if (!editMode) {
								setEditMode(true);
							}
						}}
					>
						Edit
					</Button>
				</div>
			)}
		</div>
	);
};
