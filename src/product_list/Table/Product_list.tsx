import { Container, DialogProps, Grid,Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Pagination } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import NewProd from '../Modal/NewProd';
import Product_table_data from './Product_table_data';

export default function Product_list() {
    const [open, setOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
    const [editData, setEditData] = useState<any>(null)

    const handleClick = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true)
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false)
    };

    const dataShow = useRef<HTMLElement>(null)

    useEffect (() => {
        if (open) {
            const { current : data } = dataShow;
            if(data !== null){
                data.focus();
            }
        }
    }, [open])

    const handleEdit = (item:any) => {
        setOpen(true);
        setEditData(item)
        console.log('edit ----', item)
    }
    
    return (
        <div className='hideBox'>
            <Container>
                <Grid container className='tableBoxdata'>
                    <Grid item lg={5} md={4} sm={6} xs={12} >
                        <Typography variant='h5' className='productText'>Product list</Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12} className='searchBox'>
                        <input
                            data-testid="searchId" 
                            placeholder='Search...'
                        />
                        <SearchIcon className='searchIconBox'/>
                    </Grid>
                    {/* <SarchBox/> */}
                    <Grid item lg={3} md={4} sm={12} xs={12} className='productBtn'>
                        <button onClick={handleClick('paper')}>add new product <span>+</span></button>
                    </Grid>
                </Grid>
                <Grid className='tableBoxDiv'>
                    <Product_table_data handleEditClick={handleEdit}/>
                </Grid>
                <Grid className='foodPagination'>
                    <Pagination count={5} variant="outlined" shape="rounded"/>
                </Grid>
            </Container>
            
            <NewProd 
                handleClose={handleClose}
                open={open}
                setOpen={setOpen}
                scroll={scroll}
                dataShow={dataShow}
                editData={editData}
                setEditData={setEditData}
            />
        </div>
        )
    }