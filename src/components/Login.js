import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Card, CardContent } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Required'),
            password: Yup.string().required('Required').min(6, 'Must be at least 6 characters'),
        }),
        onSubmit: (values) => {
            console.log(values);
            navigate('/dashboard');
        },
    });
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" style={{paddingTop: '5rem'}}>
            <Typography variant='h3' style={{textAlign:'center', marginBottom: '2rem', fontWeight: '700', color: '#3F68D5 '}}>Team Computer</Typography>
            <Card style={{width: '50%', margin: 'auto', padding: '3rem'}}>
                <CardContent>
                    <Box p={3}>
                        <Typography variant="h4" align="center">Login</Typography>
                        <form onSubmit={formik.handleSubmit}>
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
                            <Button type="submit" variant="contained" style={{marginTop: '1rem'}} color="primary" fullWidth>
                                Login
                            </Button>
                            <Typography style={{textAlign: 'center', marginTop: '1rem'}}>
                                Don't have an account? 
                                <Link to='/signup'> Create new account</Link>
                            </Typography>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;
