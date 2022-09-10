import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    Popover,
    Stack
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';

import {connect} from 'react-redux';
import { deleteItem , addIteamToCart } from '../../app/actions';

function Cart(props) {
    const [count, setCount] = useState(1);
    const [anchorEl,
        setAnchorEl] = useState(null);

     const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open
        ? 'simple-popover'
        : undefined;
    // const emptyCart = () => {return(<h3>Cart is Empty</h3>)}
      const productsInCart = () => (props.products.map((product, idx) => {
        return (
            <Grid item xs={2} sm={4} md={4}>
                < Card key={idx} sx={{
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
                        <br/>
                        <Stack direction="row" spacing={4}>
                            <Button size="medium" color="secondary" variant="contained" onClick={() => {
                                // props.addIteamToCart(product);
                                setCount(count+1);
                            }} >+</Button>
                        <Typography variant="h5" color="text.secondary">
                            {count}
                        </Typography>
                            <Button size="medium" color="secondary" variant="contained" onClick={() => {
                                setCount(count > 0 ? count - 1:0);
                                // props.deleteItem(product);
                            }} >-</Button>
                         </Stack>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="medium"
                            onClick={() => {
                                props.deleteItem(product);
                                handleClose();
                                // console.log(props.deleteItem(product));
                        }}>DELETE</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
      }))
     
    return (
        <div>
            <ShoppingCartIcon
                className='cart'
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}/>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}>
                <Typography sx={{
                    p: 3
                }}>{productsInCart()?productsInCart():null}</Typography>
            </Popover>
        </div>
    );
}

// {props.products?props.products:null}

const mapStateToProps = (state) => ({ products: state.cartReducer.products });

const mapDispatchToProps = {
    deleteItem,
    addIteamToCart,

};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
