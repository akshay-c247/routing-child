import React from "react";
import { Link, Outlet } from "react-router-dom";
import {Breadcrumbs, Typography} from '@mui/material'
import Layout from "./Layout";

const Home = () => {
  return (
    <>
    <div className="container1">
        <h2>We Create Software For Digital Economy</h2>  
      </div>
    <Layout>
      
      {/* <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to='/home/about'>
          About
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to="/home/contact"
          >
         Contact
          </Link>
        </Breadcrumbs> */}
</Layout>
      <Outlet />
    </>
  );
};

export default Home;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { NavLink } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;
//   const obj = [{key:"/home/about",
//         title:"about"

//   },
//   {
//     key:"/home/contact",
//     title:"/home/about"

//   }

// ]
// let navigate=Navigate()
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log(newValue)
//     navigate(obj[newValue].key)

//   };

//   return (
//     <>

//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           {obj.map((item)=>{
//             return(

//               <Tab label={item.title}  />
//             )
//           })}
//           {/* <Tab label="contact" {...a11yProps(1)} />
//           <Tab label="Solution" {...a11yProps(2)} /> */}
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0} >

//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>

//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>

//       </CustomTabPanel>
//     </Box>
//     </>
//   );
// }
