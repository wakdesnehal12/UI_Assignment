import { Box, Container, Grid, Typography } from '@material-ui/core';
import verify_img from '../assets/verify.png';
import logo from '../assets/logo.png';
import icon from '../assets/Icon.png';

import React from 'react'

export default function Otp() {
  return (
    <div>
        <Container className='mainBox'>
            <Grid container>
                <Grid lg={5} md={5} sm={12} xs={12} className="VerifyBox">
                    <img src={logo} alt="logo"/>
                    <Typography variant='h1'>Verification</Typography>
                    <Typography variant='h5'>
                        Enter the OTP sent to +91 9876543210
                    </Typography>
                    <Box className='inputBox'>
                        <input className='inputfield' />
                        <input className='inputfield' />
                        <input className='inputfield' />
                        <input className='inputfield' />
                    </Box>
                    <p className='secInpt'>sec 08</p>
                    <Typography className='otpBox'>
                        <a>Resend OTP</a> 
                        <img src={icon} alt="logo"/>
                    </Typography>
                    <Box>
                        <button className='mybtn'>Verification</button>
                    </Box>
                </Grid>
                <Grid lg={7} md={7} sm={12} xs={12} className="bannerBox">
                    <img src={verify_img} alt="verify"/>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
