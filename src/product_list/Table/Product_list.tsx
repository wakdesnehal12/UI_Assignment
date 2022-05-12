import { Container, Grid, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Pagination } from '@mui/material';
import Product_table_data from './Product_table_data';

export default function Product_list() {
    return (
        <div>
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
                        <button>add new product <span>+</span></button>
                    </Grid>
                </Grid>
                <Product_table_data/>
                <Grid className='foodPagination'>
                    <Pagination count={5} variant="outlined" shape="rounded"/>
                </Grid>
               
            </Container>
        </div>
        )
    }