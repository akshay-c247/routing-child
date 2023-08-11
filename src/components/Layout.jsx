import React from 'react';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';


const Layout = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
 const navigate = useNavigate()

const route = [{
 key: '/home/about',
 title: 'About'
 }, 
 {
 key: '/home/contact',
 title: 'Contact'
},
 ]
 useEffect(() => {
  navigate(route[currentTab].key)
  },[currentTab]) 
 
  const handleChange = (event, newValue) => {
  setCurrentTab(newValue);
  };
 
  
  return (
    <>
 <div>
<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
<Tabs value={currentTab} onChange={handleChange} centered>
 {route.map((value,index)=>{
 return( 
 <Tab key={index} label={value.title} />
 ) 
  })}

</Tabs>
  </Box>
 </div>
  </>
  )
};

export default Layout;