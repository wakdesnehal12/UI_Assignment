import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Typography } from '@material-ui/core';
import login_banner from '../assets/login-banner.png';
import logo from '../assets/logo.png';
import flag from '../assets/Flag_of_India.png';
import phone_icon from '../assets/phone_icon.png';
export default function Login() {

return (
    <div>
        <Container className='mainBox'>
            <Grid container>
                <Grid item lg={4} md={6} sm={12} xs={12} className="logoBox">
                    <img src={logo} alt="logo"/>
                    <Typography variant='h1'>Welcome Back!</Typography>
                    <Typography variant='h5'>login account</Typography>
                    <Box className='form-box'>
                        <Grid container>
                            <Grid className='flagBox' item xs={4} sm={3}>
                            <img className='flag-img' src={flag} alt="flag"/>
                                <select> 
                                    <option> +91</option>
                                    <option> +92</option>
                                    <option> +93</option>
                                    <option> +94</option>
                                </select>
                            </Grid>
                            <Grid className='inputbox' item xs={8} sm={9}>
                                <input className='inputfield' placeholder="Mobile no" />
                                <img src={phone_icon} alt="phone"/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid>
                        <Button id='mybtn'>Get OTP</Button>
                    </Grid>
                </Grid>
                <Grid item lg={8} md={6} sm={12} xs={12} className="bannerBox">
                    <img src={login_banner} alt="banner"/>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}
