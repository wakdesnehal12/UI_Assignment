import React from 'react'
import Login from './Login_Page/Login'
import Otp from './otp_page/Otp'
import ProductHome from './product_list/ProductHome'
import NewProd from './product_list/Modal/NewProd'

export default function Home() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Otp/> */}
      <ProductHome/>
    </div>
  )
}