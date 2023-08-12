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
    const user = JSON.parse(localStorage.getItem('user'))
    setUserData(user)
    // console.log(user)
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("user",JSON.stringify(input))
    //  JSON.parse(localStorage.getItem("user"));
    // const getuserArr = localStorage.getItem("user")
    // console.log(getuserArr)


      if ( userdata.email === userLogin.email && userdata.password === userLogin.password) {
        console.log("successfull")
        navigate("/home")

      }else{
        console.log("not success")
      }

    


  }

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
        {/* <button type="button" className="button buttonBlue">Submit
     <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
    </button> */}
        {/* <button className='btn btn-primary'>submit</button> */}



        <Button variant="contained" onClick={handlesubmit}>Submit</Button>


        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/signup" variant="body2">
              if new user ? Register
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* <footer><a href="http:www.polymer-project.org/" target="_blank"><img src="https:www.polymer-project.org/images/logos/p-logo.svg"/></a>
   <p>You Gotta Love <a href="http:www.polymer-project.org/" target="_blank">Google</a></p>
 </footer> */}

    </React.Fragment>
  )
}

export default Login;


