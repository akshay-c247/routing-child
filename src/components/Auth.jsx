import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {
 const navigate = useNavigate()

 useEffect(() => {
  if (!localStorage.getItem('user')) {
   navigate('/login')
   console.log('not authenticate')
  }
 })

 return (
  <div>
   {props.children}
  </div>
 );
}

export default Auth;