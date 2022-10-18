import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core';
import verify_img from '../assets/verify.png';
import logo from '../assets/logo.png';
import icon from '../assets/Icon.png';
import { OtpMsg } from './OtpMsg';
import {useLocation, useNavigate} from 'react-router-dom';

export interface buttonPro{
    // item: any,
    save: any
    // data-testid: any
}
  
export default function Otp() {
    
    let navigate = useNavigate()
    const {state}:any = useLocation();
    const [counter, setCounter] = useState(59);
    const [valueOne, setValueOne] = useState<number>();
    const [valueTwo, setValueTwo] = useState<number>();
    const [valueThree, setValueThree] = useState<number>();
    const [valueFour, setValueFour] = useState<number>();
    const [saveData, setSaveData] = useState<any>([]);

    useEffect(() => {
        let timer:any = counter > 0 && setInterval(() => setCounter(counter-1),1000)
        return () => clearInterval(timer)
    },[counter])
    
    const baseUrl = 'https://extended-retail-app.herokuapp.com/api';
    
    const verifyData = async() => {
        await fetch(`${baseUrl}/customer/login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": state.mobileNum,
                "password": `${valueOne}${valueTwo}${valueThree}${valueFour}`,
                "device_token":"device token goes here",
                "device_type":"android|ios|web"
            })
        }).then(res => res.json())
        .then((data)=> {
            console.log(data);
            setSaveData([data.message]);

            let myData = data.token

            if(myData){
                navigate(`/product`)
            }
            localStorage.setItem('key', JSON.stringify(data))
        })
    }
    const handleVerify = () => {
        verifyData();
    }
    return (
    <div>
        <Container className='mainBox'>
            <Grid container>
                <Grid item lg={5} md={5} sm={12} xs={12} className="VerifyBox">
                    <img src={logo} alt="logo"/>
                    <Typography variant='h1'>Verification</Typography>
                    <Typography variant='h5'>
                        Entered the OTP sent to {state.mobileNum}
                    </Typography>
                    <Box className='inputBox' data-testid="otpvalue">
                        <input 
                            data-testid="otpmsgOne"
                            className='inputfield'
                            value={valueOne}
                            onChange={(e:any)=> setValueOne(e.target.value)}
                        />
                        <input 
                            data-testid="otpmsgTwo"
                            className='inputfield' 
                            value={valueTwo}
                            onChange={(e:any) => setValueTwo(e.target.value)}
                        />
                        <input
                            data-testid="otpmsgThree" 
                            className='inputfield' 
                            value={valueThree}
                            onChange={(e:any) => setValueThree(e.target.value)}
                        />
                        <input
                            data-testid="otpmsgFour" 
                            className='inputfield' 
                            value={valueFour}
                            onChange={(e:any) => setValueFour(e.target.value)}
                        />
                    </Box>
                        <p className='secInpt'>sec 00:{counter}</p>
                        <Typography className='otpBox'>
                            <a href="#"><span>Resend OTP</span> <img src={icon} alt="logo"/></a> 
                        </Typography>
                    <Box>
                        <button className='mybtn' onClick={handleVerify} data-testid="verify">Verification</button>
                    </Box>
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12} className="bannerBox">
                    <img src={verify_img} alt="verify"/>
                </Grid>
            </Grid>
            
            {
                saveData.map((items:any, key:number) => {
                    return (
                        <div>  
                            <OtpMsg
                                data-testid={'otpmsgs-' + key} key={key}
                                save={saveData}
                                // item={items}
                            />
                        </div>
                    )
                })
            }
        </Container>
    </div>
 )
}

// export {verifyData}