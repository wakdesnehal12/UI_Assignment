import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Container, Typography } from '@material-ui/core';
import login_banner from '../assets/login-banner.png';
import logo from '../assets/logo.png';
import flag from '../assets/Flag_of_India.png';
import phone_icon from '../assets/phone_icon.png';
import {useNavigate} from 'react-router-dom';

export interface numPro{
    updateNum?: number | any ,
    updateFetch?: number | any
}
export default function Login() {
    let navigate = useNavigate()
    const [addNumber, setAddNumber] = useState<any>();
    const [fetchOtp, setFetchOtp] = useState<any>([]);

    const handleChange = (event:any) => {
        setAddNumber(event.target.value)
    }
    
    const login = () => {
        localStorage.setItem('login', 'test')
        navigate('/')
    }

    useEffect(() => {
        let login = localStorage.getItem('data')
        if(!login){
            navigate('/')
        }
    },[])
    const baseUrl = 'https://extended-retail-app.herokuapp.com/api';
    
    const loadData = async () => {
        await fetch(`${baseUrl}/customer/getOtp`,{
            method: "POST",
            headers: 
            {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                "username": addNumber
            })
        }).then(res => res.json())
        .then((result) => {
            console.log(result.otp)
            setFetchOtp([result.otp])
            setFetchOtp([result.message]);
            
            let myoptnum:any = result.otp;
            if(myoptnum){
                localStorage.setItem("data", JSON.stringify(result));
                navigate(`/otp`, {state:{mobileNum:addNumber}})
            }
        }).catch(error => {
            console.log(error)
        })
    }

   
    const handleClick = () => {
        loadData();
    }

   
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
                                </select>
                            </Grid>
                            <Grid className='inputbox' item xs={8} sm={9}>
                                <input 
                                    type="text"
                                    data-testid="addNumber"
                                    className='inputfield' 
                                    placeholder="Mobile no"
                                    name='mobile'
                                    value={addNumber}
                                    onChange={handleChange}
                                />
                                <img src={phone_icon} alt="phone"/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography className='errMsg' data-testid="errMsg">{fetchOtp}</Typography>
                    <Grid>
                        <button className='mybtn' onClick={handleClick} data-testid="getOtp">Get OTP</button>
                    </Grid>
                </Grid>
                <Grid item lg={8} md={6} sm={12} xs={12} className="bannerBox">
                    <img src={login_banner} alt="banner"/>
                </Grid>
                
            </Grid>
            {
                fetchOtp.map((item:any, key: number) => {
                    return(
                        <>
                            {item.otp}
                        </>
                    )
                })
            }
        </Container>
    </div>
    
  );
}

