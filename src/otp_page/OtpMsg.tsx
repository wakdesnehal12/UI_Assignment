import React from 'react';
import { buttonPro } from './Otp';

export const OtpMsg = ({ save }:buttonPro) => {
  return (
    <div className='button-box'>
      <p>{save} </p>
      <p className='alertBox' data-testid={"alertmsg"}>Please Enter the Correct OTP</p>
    </div>
  )
}
