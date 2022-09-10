import React, { useEffect, useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from '@mui/material';
import './Product.css'

import {connect} from 'react-redux';
import { activeCatagory,viewDetails, reset } from '../../app/productReducer';
import { addIteamToCart } from '../../app/actions';


function Product(props) {
    const [count, setCount] = useState(0);
    // console.log(props.data)
    useEffect(() => {
        products();
        console.log('oooooo', products());
    }, [count]);
    const products = () => (props.data.map((product, idx) => {
        return (
            <Grid key={idx}  item xs={2} sm={4} md={4}>
                < Card  sx={{
                    maxWidth: 345
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="product image"
                        style={{
                        width: 350,
                        height: 200
                    }}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="">
                            {product.displayName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <br/>
                        <Typography variant="h6" gutterBottom>
                            {`Price : ${product.price}`} 
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {`In Stock : ${product.inventoryCount}`} 
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent:'center'}}>
                        <Button
                            size="small"
                            onClick={() => {
                            // console.log('8888');
                                props.addIteamToCart(product);
                                setCount(count + 1);
                        }}>Add To Cart</Button>
                        <Button size="small" onClick={() => {
                                props.viewDetails(product);
                        }} >VIEW DETAILS</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }))
    // console.log('ppppppppp',props);
    return (
        <>
            <h2>{props.data[0].categoryAssociation}</h2>
            <div className='container'>
                <Grid
                    container
                    spacing={{
                    xs: 1,
                    md: 5
                }}
                    columns={{
                    xs: 4,
                    sm: 8,
                    md: 12
                    }}
                    style={{
                    display: 'flex'
                }}>
                    {products()}
                </Grid>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({data: state.productReducer.products})

const mapDispatchToProps = {
    activeCatagory,
    reset,
    addIteamToCart,
    viewDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);