import React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import Cart from '../Cart/Cart';

import {connect} from 'react-redux';

function Header(props) {
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar position="static">
                <Toolbar style={{
                    dipaly: 'center'
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                        mr: 2
                    }}></IconButton>
                    <Typography
                        variant="h6"
                        component=""
                        sx={{
                        flexGrow: 1
                    }}>
                        Shopperia Store
                    </Typography>
                    <Cart/>
                    <h3>({props.counter})</h3>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const mapStateToProps = (state) => ({counter: state.cartReducer.totalItems})

export default connect(mapStateToProps)(Header);