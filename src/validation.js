// validation.js
import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Must be at least 6 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required').min(6, 'Must be at least 6 characters'),
});
