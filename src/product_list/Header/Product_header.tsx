import React from 'react';
import { Container, Grid, Typography, ListItem, ListItemText } from '@material-ui/core';
import logo from '../../assets/logo.png'
import admin from '../../assets/admin.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DrawerComp from './DrawerComp';
import Product_list from '../Table/Product_list';

export default function Product_header() {
    return (
        <div className='headerMainBox'>
            <Container>
                <Grid container className='HeaderBox'>
                    <Grid lg={2} md={3} sm={6} xs={12} className="logoData">
                        <a href='#'>
                            <img src={logo} alt="logo"/>
                            <Typography className='foodData'>Food Delivery</Typography>
                        </a>
                    </Grid>
                    
                    <Grid lg={8} md={7} sm={2} xs={4} className='navBox'>
                        <ListItem>
                            <ListItemText>Dashboard</ListItemText>
                            <ListItemText>Menus</ListItemText>
                            <ListItemText>Orders</ListItemText>
                            <ListItemText>Restaurant list</ListItemText>
                        </ListItem>
                        <DrawerComp/>
                        </Grid>
                    <Grid lg={1} md={1} sm={2} xs={4} className="admin">
                        <img src={admin} alt="admin"/>
                    </Grid>
                    <Grid lg={1} md={1} sm={2} xs={4}>
                        <div className='icon'>
                            <NotificationsNoneIcon />
                            <span className='count'>10+</span>
                        </div>
                    </Grid> 
                </Grid>
            </Container>
            <Product_list/>
        </div>
        )
    }