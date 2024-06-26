import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Card, CardContent } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: (values) => {
            console.log(values);
            navigate('/dashboard');
        },
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" style={{ paddingTop: '5rem' }}>
            <Typography  variant="h3" style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: '700', color: '#3F68D5 ' }}>Team Computer</Typography>
            <Card style={{ width: '50%', margin: 'auto', padding: '3rem' }}>
                <CardContent>
                    <Box m={3}>
                    <Typography variant="h4" align="center">Signup</Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                id="fullName"
                                name="fullName"
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...formik.getFieldProps('fullName')}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...formik.getFieldProps('email')}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...formik.getFieldProps('password')}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <TextField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...formik.getFieldProps('confirmPassword')}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                             <Button type="submit" variant="contained" style={{marginTop: '1rem'}} color="primary" fullWidth>
                                Signup
                            </Button>
                            <Typography style={{textAlign: 'center', marginTop: '1rem'}}>
                               Already have an account?  
                                <Link to='/'> Login here</Link>
                            </Typography>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Signup;
