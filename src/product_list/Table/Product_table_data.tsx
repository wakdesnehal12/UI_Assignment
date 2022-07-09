import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import ConfirmBox from './ConfirmBox'
import { Pagination } from '@mui/material';

//for delete popup box
export interface ProData{
    message: string,
    isLoading: boolean,
}

export default function Product_table_data({handleEditClick}:any) {
    //for get item in my table
    const [data, setData] = useState<any>([]);

    //for edit
    const [editData, setEditData] = useState<any>()

    //for delete popup
    const [confirmBox, setConfirmBox] = useState({
        message: "",
        isLoading: false,
    });
    const idProductRef = useRef();
    
    //common url
    const baseUrl = 'https://extended-retail-app.herokuapp.com/api';
    
    //for get item in my table
    let getData = async() => {
        const newData:any = localStorage.getItem('key');
        const jsonData:any = JSON.parse(newData);
        const tokenData = jsonData.token
        // console.log(tokenData, "list2")
        await fetch(`${baseUrl}/products/getMenuItems?userId=624a61bbd873b1d7b1bc78bc`,{
            method: "GET",
            headers:{
                'Content-Type' : 'application/json',
                token: tokenData
            }
        })
        .then(res => res.json())
        .then((result) => {
            setData(result.data)
            localStorage.setItem('keyone', JSON.stringify(result))
        })
        .catch((err) => { 
            console.log(err)
        })
    }

    useEffect(() => {
        getData();
    },[])

    //Delete modal
    const handleDialog = (message:any, isLoading:any) => {
        setConfirmBox({
            message,
            isLoading
        })
    }
    const userDelete = async (choose:any) => {
        if(choose){
            deleteData(idProductRef.current);
            handleDialog("", false);
        }else{
            handleDialog("", false);
        }
    }
    const handleDeleteClick = (_id:any) => {
        handleDialog("Are you sure you want to delete this product?", true)
        idProductRef.current = _id
    }

    //Delete API
    const deleteData = async(_id:any) => {
        const newData:any = localStorage.getItem('key');
        const jsonData:any = JSON.parse(newData);
        const tokenData = jsonData.token;
        const userId = jsonData?.data?._id;

        await fetch(`${baseUrl}/products/deleteMenuItem?userId=${userId}&itemId=${_id}`, {
            method: "DELETE",
            headers:{   
                'Content-Type': 'application/json',
                token: tokenData
            }
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            getData()
        }).catch((err) => {
            console.log(err)
        })
        
    }
    
    return (
        <>
            <Table className='tableBox'>
                <TableHead className='tableHead'>
                    <TableRow>
                        <TableCell className='tableRow'>Name</TableCell>
                        <TableCell className='tableRow'>Product id</TableCell>
                        <TableCell className='tableRow'>Quantity</TableCell>
                        <TableCell className='tableRow'>Status</TableCell>
                        <TableCell className='tableRow'>Price</TableCell>
                        <TableCell className='tableRow'>Discount Price</TableCell>
                        <TableCell className='tableRow'>Edit</TableCell>
                        <TableCell className='tableRow'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                {
                    data.map((item:any, id: any) => {
                        return(
                        <TableBody className='tableBody' data-testid="allMenu">
                            <TableRow>
                                <TableCell className='tableCell TableImgBox'>
                                    <img src={item.image} alt="french_fries"/>
                                <Typography className='menuText' data-testid="add">{item.name}</Typography>
                                </TableCell>
                                <TableCell className='tableCell'>{id}</TableCell>
                                <TableCell className='tableCell'>{item.stock}</TableCell>
                                <TableCell className='tableCell'>
                                    {item.stock > 0 ? <p> In Stock </p>: <p>Out of Stock</p>}
                                </TableCell>
                                <TableCell className='tableCell'>{item.price}</TableCell>
                                <TableCell className='tableCell'>{item.discountPrice}</TableCell>
                                <TableCell className='tableCell tableDelete' onClick={()=> handleEditClick(item)}>Edit</TableCell>
                                <TableCell className='tableCell tableDelete' onClick={() => handleDeleteClick(item._id)} data-testid="deleteMenu">Delete</TableCell>
                            </TableRow>
                        </TableBody>
                        )
                    })
                }
                {/*for  Delete popup */}
                {confirmBox.isLoading && (
                    <ConfirmBox 
                        message={confirmBox.message} 
                        onDialog={userDelete}
                    />)
                }
                
            </Table>
        </>
        )
    }