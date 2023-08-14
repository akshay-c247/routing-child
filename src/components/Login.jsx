import React, { useEffect, useState } from 'react';
import './login.css';
import Button from '@mui/material/Button';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { NavLink } from 'react-router-dom';

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [userdata, setUserData] = useState([])
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value

    })
  }

  useEffect(() => {
    const users = localStorage.getItem('users')
    setUserData(users)
  }, [])


  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(userLogin, "ul");
    console.log(userdata, "ud")

    const tempData = JSON.parse(userdata).filter((item) => item.password === userLogin.password && item.email === userLogin.email)
    console.log(userLogin, "ud")

    console.log(userdata, "data");
    console.log(tempData, "tempdata");
    console.log(tempData[0].password === userLogin.password)

    if (userLogin.email === tempData[0].email && userLogin.password === tempData[0].password) {
      console.log('sucessfull')

      navigate('/home')
      localStorage.setItem("user_login",JSON.stringify(tempData))
    } else {
      console.log('not success')
    }
  };

  return (
    <React.Fragment>
      <hgroup>
        <h1>Material Design Form</h1>
        {/* <h3>By Josh Adamous</h3> */}
      </hgroup>
      <form className='login-form'>

        <div className="group">
          <input type="email" id="email" name='email' value={userLogin.email} onChange={handlechange}
          /><span className="highlight"></span><span className="bar"></span>
          <label>EMAIL</label>
        </div>
        <div className="group">
          <input type="password" name='password' value={userLogin.password} onChange={handlechange} /><span className="highlight" id="password"
          ></span><span className="bar"></span>
          <label>PASSWORD</label>
        </div>





        <Button variant="contained" onClick={handlesubmit}>Submit</Button>


        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/signup" variant="body2">
              if new user ? Register
            </Link>
          </Grid>
        </Grid>
      </form>


    </React.Fragment>
  )
}

export default Login;