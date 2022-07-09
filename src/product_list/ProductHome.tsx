import React, { useEffect, useState } from 'react'
import Product_header from './Header/Product_header'
import NewProd from './Modal/NewProd'
import Product_list from './Table/Product_list'

export default function ProductHome() {
  const [storeData, setStoreData] = useState<any>(null)
  useEffect(() => {
    let store:any = (localStorage.getItem('key') || "{}");
    setStoreData({storeData:store})
    console.log(store)
  },[])
  return (
    <>
      <Product_header/>
      <Product_list/>
    </>
  )
}
