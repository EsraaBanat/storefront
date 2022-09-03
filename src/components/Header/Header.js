import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function Header() {
    return (
            <Box sx={{
                flexGrow: 1
            }} >
                <AppBar position="static">
                    <Toolbar style={{dipaly:'center'}} >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                            mr: 2
                        }}>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component=""
                            sx={{
                            flexGrow: 1
                        }} >
                            Shopperia Store
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}
