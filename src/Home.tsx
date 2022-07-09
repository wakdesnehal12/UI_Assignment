import React, { useState } from 'react'
import Login from './Login_Page/Login'
import Otp from './otp_page/Otp'
import ProductHome from './product_list/ProductHome'
import NewProd from './product_list/Modal/NewProd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protectedroute from './ProtectedRoute/Protectedroute'


export  function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protectedroute Component={Login}/>}/>
          <Route path="/otp" element={<Protectedroute Component={Otp}/>}/>
          <Route path="/product" element={<Protectedroute Component={ProductHome}/>}/>
          {/* <Route path="/" element={<Login />}/>
          <Route path="/otp" element={<Otp />}/>
          <Route path="/product" element={<ProductHome />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}