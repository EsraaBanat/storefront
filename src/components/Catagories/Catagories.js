import React, { useEffect } from 'react';
import {Box , Tab , Tabs} from '@mui/material';

import { connect } from 'react-redux';
import { activeCatagory, reset } from '../../app/productReducer';

 function Catagories(props,) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
   useEffect(() => {
     props.activeCatagory('Food')
   }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab label="FOOD" onClick={() => {
          props.reset();
          props.activeCatagory('Food')
        }}  />
        <Tab label="ELECTRONICS" onClick={() => {
          props.reset();
          props.activeCatagory('Electronics')
        }} />
        <Tab label="GAMES" onClick={() => {
          props.reset();
          props.activeCatagory('Games')
        }}/>
        <Tab label="FASHION" onClick={() => {
          props.reset();
          props.activeCatagory('Fashion')
        }} />
      </Tabs>
    </Box>
  );
}

const mapStateToProps = (state) => ({
    mycounter: state.productReducer.candidates
})

const mapDispatchToProps = { activeCatagory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Catagories);