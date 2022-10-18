import { Container, Grid, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import food_Img from '../../assets/food_Img.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import PopBox from './PopBox';
import CloseIcon from '@material-ui/icons/Close';

const obj = {
    name: "",
    stock: "",
    unit: "",
    price: "",
    discountPrice: "",
    description: ""
}
export interface Pro {
    children?: React.ReactNode,
    open: boolean,
    handleClose: any,
    scroll?: any,
    dataShow?: any,
    setEditData: any,
    editData: any,
    setOpen: any,
}

export default function NewProd({ handleClose, open, scroll, dataShow, editData, setEditData, setOpen }: Pro) {
    const navigate = useNavigate();
    const [uploadImage, setUploadImage] = useState<any>()
    const [upload, setUpload] = useState<any>('')
    const imgref = useRef<any>();

    // const [searchBox, setSearchBox] = useState<any>({
    //     isLoading: true
    // });
    //add product
    const [data, setData] = useState<any>([]);
    const [addList, setAddList] = useState<any>(obj)

    //common url
    const baseUrl = 'https://extended-retail-app.herokuapp.com/api'

    //add product
    const loadData = async () => {
        const newData: any = localStorage.getItem('key');
        const jsonData: any = JSON.parse(newData);
        const tokenData = jsonData.token

        await fetch(`${baseUrl}/products/createMenuItem`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                token: tokenData
            },
            body: JSON.stringify({
                "name": name,
                "stock": stock,
                "unit": unit,
                "weight": '250',
                "price": price,
                "isVeg": true,
                "image": "https://thumbs.dreamstime.com/b/shai-pulao-vegetable-indian-biryani-31520269.jpg",
                "discountPrice": discountPrice,
                "packingCharges": 10,
                "description": "Veg pulao hygenique",
                "enabled": true,
                "customerId": "624a61bbd873b1d7b1bc78bc",
            })
        }).then(res => res.json())
            .then((result) => {
                console.log(result)
                setData([result.message])
                setAddList(obj);
                setOpen(false)
                navigate(`/product`);
            })
    }
    const handleClick = () => {
        loadData(); 
    }
    
    const { name, discountPrice, price, unit, stock }: any = addList

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setAddList({
            ...addList,
            [name]: value
        })
    }

    useEffect(() => {
        if(editData) {
            setAddList({
                name: editData.name,
                discountPrice: editData.discountPrice,
                price: editData.price,
                unit: editData.unit,
                stock: editData.stock
            })
        }
    }, [editData])

    const updateApiHandler = async () => {
        console.log('update product id', editData._id)
        const newData:any = localStorage.getItem('key');
        const jsonData:any = JSON.parse(newData);
        const tokenData = jsonData.token;
        const userId = jsonData.data._id;
        //fetch()
        await fetch(`${baseUrl}/products/updateMenuItem?userId=${userId}&itemId=${editData._id}`,{
            method: "PUT",
            headers: {
                "Content-Type": 'application/json',
                token: tokenData
            },
            body: JSON.stringify({
                "name": name,
                "stock":stock,
                "unit":unit,
                "price":price,
                "discountPrice":discountPrice
            })
        }).then((res) => res.json)
        .then((result) => {
            console.log(result, "data")
            setEditData(null)
            setOpen(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        if(!upload){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setUploadImage(fileReader.result);
        };
        fileReader.readAsDataURL(upload);
        localStorage.setItem('image', JSON.stringify(uploadImage))
    },[upload])
    const uploadHandler = (event:any) => {
        let pickedFile;
        if(event.target.files && event.target.files.length===1){
            pickedFile= event.target.files[0];
            setUpload(pickedFile)
        }
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        imgref.current.click()
    }

    return (
        <Dialog open={open} onClose={handleClose} scroll={scroll} aria-describedby="scroll-dialog-description">
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText id="scroll-dialog-description" ref={dataShow} tabIndex={-1}>
                    <Container className='addProduct'>
                        <Typography>{data}</Typography>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={12} xs={12} className='productText'>
                                <Typography>Product Image</Typography>
                                <PopBox uploadHandler={uploadHandler} handleSubmit={handleSubmit} imgref={imgref} uploadImage={uploadImage} upload={upload}/>
                                <Carousel className='mySlider'>
                                    <Carousel.Item>
                                        <img src={food_Img} alt="food_Img" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={slider2} alt="slider2" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={slider3} alt="slider3" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        {uploadImage && <img src={uploadImage} alt="preview"/>}
                                    </Carousel.Item>
                                </Carousel>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className="productForm">
                                <Grid container className='inputProdBox'>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label>Product Name</label>
                                        <input
                                            className='prdtname'
                                            placeholder='Enter Product Name'
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={handleChange}
                                            data-testid="prdtnameid"
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <label>Price</label>
                                        <input
                                            data-testid="priceid"
                                            className="priceBox"
                                            placeholder='Enter Price'
                                            type="number"
                                            name="price"
                                            value={price}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <label>Discount Price</label>
                                        <input
                                            data-testid="discPrice"
                                            className="priceBox"
                                            placeholder='Discount Price'
                                            type="number"
                                            name='discountPrice'
                                            value={discountPrice}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <label>Unit</label>
                                        <input
                                            data-testid="unitBox"
                                            className="unitBox"
                                            placeholder='Unit Gms'
                                            type="text"
                                            name="unit"
                                            value={unit}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <label>Stock</label>
                                        <input
                                            data-testid="stockBox"
                                            className="unitBox"
                                            placeholder='Stock'
                                            type="number"
                                            name='stock'
                                            value={stock}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <label>Is Veg</label>
                                        <select className="unitBox">
                                            <option>True</option>
                                            <option>False</option>
                                        </select>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12} className='inputProdBox'>
                                    <label>Description</label>
                                    <textarea placeholder='Type Here....'></textarea>
                                </Grid>
                                {
                                    editData ?
                                        <button className='savePrdt' onClick={updateApiHandler} data-testid="update">Update product</button>
                                    :
                                        <button className='savePrdt' onClick={handleClick} data-testid='addMenu'>save product</button>
                                }
                                </Grid>
                            </Grid>
                            
                        {
                            data.map((item: any, key:number) => {
                                (
                                    <div data-testid='menuAdd'>
                                        {item.message}
                                    </div>
                                )
                            })
                        }
                    </Container>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={handleClose} className="closeIcon">
                    <CloseIcon />
                </button>
            </DialogActions>
        </Dialog>
    )
}
