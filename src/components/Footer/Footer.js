import React from 'react';
import {Box,Paper,styled} from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? '#1A2027'
        : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function Footer() {
    return (
        <Box style={{position:'fixed', bottom: '0'}}>
            <Item>© 2022 Javascript 401 React + Redux + Material U</Item>
        </Box>
    )
}
