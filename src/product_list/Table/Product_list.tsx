import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, Grid, Modal, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Pagination } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import NewProd from '../Modal/NewProd';
import Product_table_data from './Product_table_data';
import CloseIcon from '@material-ui/icons/Close';

export default function Product_list() {
    const [open, setOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

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
    return (
        <div className='hideBox'>
            <Container>
                <Grid container className='tableBoxdata'>
                    <Grid lg={5} md={4} sm={6} xs={12} >
                        <Typography variant='h5' className='productText'>Product list</Typography>
                    </Grid>
                    <Grid lg={4} md={4} sm={6} xs={12} className='searchBox'>
                        <input placeholder='Search...'/>
                        <SearchIcon className='searchIconBox'/>
                    </Grid>
                    <Grid lg={3} md={4} sm={12} xs={12} className='productBtn'>
                        <button onClick={handleClick('paper')}>add new product <span>+</span></button>
                    </Grid>
                </Grid>
                <Grid className='tableBoxDiv'>
                    <Product_table_data/>
                </Grid>
                <Grid className='foodPagination'>
                    <Pagination count={5} variant="outlined" shape="rounded"/>
                </Grid>
            </Container>
            <Dialog open={open} onClose={handleClose} scroll={scroll} aria-describedby="scroll-dialog-description">
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText id="scroll-dialog-description" ref={dataShow} tabIndex={-1}>
                        {<NewProd/>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="closeIcon">
                        <CloseIcon/>
                    </button>
                </DialogActions>
            </Dialog>
            
        </div>
        )
    }