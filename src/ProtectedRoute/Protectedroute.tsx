import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protectedroute(props:any) {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login');

        if(!login){
            navigate('/')
        }else{
            navigate('/otp')
        }
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}
