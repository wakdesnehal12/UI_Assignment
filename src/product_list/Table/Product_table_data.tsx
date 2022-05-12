import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import french_fries from '../../assets/french_fries.png';
import french_crostin from '../../assets/french_crostin.png';
import Noodles from '../../assets/Noodles.png';
import pizza from '../../assets/Pizza.png';
import rice from '../../assets/rice.png';
import fried_rice from '../../assets/fried_rice.png';


export default function Product_table_data() {
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
                    </TableRow>
                </TableHead>
                <TableBody className='tableBody'>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={french_fries} alt="french_fries"/>
                            <Typography className='menuText'>French Fries</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>01475</TableCell>
                        <TableCell className='tableCell'>9608</TableCell>
                        <TableCell className='tableCell'>In Stock</TableCell>
                        <TableCell className='tableCell'>₹ 200</TableCell>
                        <TableCell className='tableCell'>₹ 200</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={french_crostin} alt="french_fries"/>
                            <Typography className='menuText'>French Crostini</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>02351</TableCell>
                        <TableCell className='tableCell'>2290</TableCell>
                        <TableCell className='tableCell'>Out Of Stock</TableCell>
                        <TableCell className='tableCell'>₹ 150</TableCell>
                        <TableCell className='tableCell'>₹ 150</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={Noodles} alt="french_fries"/>
                            <Typography className='menuText'>Noodles</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>12121</TableCell>
                        <TableCell className='tableCell'>2769</TableCell>
                        <TableCell className='tableCell'>In Stock</TableCell>
                        <TableCell className='tableCell'>₹ 500</TableCell>
                        <TableCell className='tableCell'>₹ 500</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={french_fries} alt="french_fries"/>
                            <Typography className='menuText'>Garlic Bread</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>12145</TableCell>
                        <TableCell className='tableCell'>12145</TableCell>
                        <TableCell className='tableCell'>Out Of Stock</TableCell>
                        <TableCell className='tableCell'>₹ 100</TableCell>
                        <TableCell className='tableCell'>₹ 100</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={pizza} alt="french_fries"/>
                            <Typography className='menuText'>Pizza</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>14451</TableCell>
                        <TableCell className='tableCell'>3606</TableCell>
                        <TableCell className='tableCell'>In Stock</TableCell>
                        <TableCell className='tableCell'>₹ 150</TableCell>
                        <TableCell className='tableCell'>₹ 150</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={rice} alt="french_fries"/>
                            <Typography className='menuText'>Lemon Rice</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>14526</TableCell>
                        <TableCell className='tableCell'>3606</TableCell>
                        <TableCell className='tableCell'>In Stock</TableCell>
                        <TableCell className='tableCell'>₹ 40</TableCell>
                        <TableCell className='tableCell'>₹ 40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='tableCell'>
                            <img src={fried_rice} alt="french_fries"/>
                            <Typography className='menuText'>Fried Rice</Typography>
                        </TableCell>
                        <TableCell className='tableCell'>14526</TableCell>
                        <TableCell className='tableCell'>5384</TableCell>
                        <TableCell className='tableCell'>In Stock</TableCell>
                        <TableCell className='tableCell'>₹ 60</TableCell>
                        <TableCell className='tableCell'>₹ 60</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
        )
    }