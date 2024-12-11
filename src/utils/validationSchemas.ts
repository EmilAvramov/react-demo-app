import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	email: Yup.string().required('Email is required'),
	dateOfBirth: Yup.string(),
});
