import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	email: Yup.string()
		.required('Email is required')
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, 'Invalid email format'),
	dateOfBirth: Yup.string(),
});
