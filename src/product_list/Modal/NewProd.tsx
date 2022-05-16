import { Container, Grid, Typography, Box } from '@material-ui/core'
import { Carousel, Popover } from 'react-bootstrap';
import food_Img from '../../assets/food_Img.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import PopBox from './PopBox';


export default function NewProd() {
    
    
    return (
    <div>
        <Container className='addProduct'>
            <Grid container>
                <Grid lg={6} md={6} sm={12} xs={12} className='productText'>
                    <Typography >Product Image</Typography>
                    <PopBox/>
                    <Carousel className='mySlider'>
                        <Carousel.Item>
                            <img src={food_Img} alt="food_Img"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slider2} alt="slider2"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slider3} alt="slider3"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slider2} alt="slider2"/>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid lg={6} md={6} sm={12} xs={12} className="productForm">
                    <Grid container className='inputProdBox'>
                        <Grid lg={12} md={12} sm={12} xs={12}>
                            <label>Product Name</label>
                            <input className='prdtname' placeholder='Enter Product Name'/>
                        </Grid>
                        <Grid lg={6} md={6} sm={6} xs={12}>
                            <label>Price</label>
                            <input className="priceBox" placeholder='Enter Price'/>
                        </Grid>
                        <Grid lg={6} md={6} sm={6} xs={12}>
                            <label>Discount Price</label>
                            <input className="priceBox" placeholder='Discount Price'/>
                        </Grid>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <label>Unit</label>
                            <input className="unitBox" placeholder='Unit Gms'/>
                        </Grid>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <label>Stock</label>
                            <input className="unitBox" placeholder='Stock'/>
                        </Grid>
                        <Grid lg={4} md={4} sm={4} xs={12}>
                            <label>Is Veg</label>
                            <select className="unitBox">
                                <option>True</option>
                                <option>False</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} className='inputProdBox'>
                        <label>Description</label>
                        <textarea placeholder='Type Here....'></textarea>
                    </Grid>
                    <button className='savePrdt'>save product</button>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
