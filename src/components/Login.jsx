import React from 'react';
import './login.css';


const Login = () => {
  return (
    <React.Fragment>
     <hgroup>
  <h1>Material Design Form</h1>
  {/* <h3>By Josh Adamous</h3> */}
</hgroup>
<form className='login-form'>
  <div className="group">
    <input type="text"/><span className="highlight"></span><span className="bar"></span>
    <label>Name</label>
  </div>
  <div className="group">
    <input type="email"/><span className="highlight"></span><span className="bar"></span>
    <label>Email</label>
  </div>
  <button type="button" className="button buttonBlue">Submit
    <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
  </button>
</form>
{/* <footer><a href="http://www.polymer-project.org/" target="_blank"><img src="https://www.polymer-project.org/images/logos/p-logo.svg"/></a>
  <p>You Gotta Love <a href="http://www.polymer-project.org/" target="_blank">Google</a></p>
</footer> */}

    </React.Fragment>
  )
}

export default Login;