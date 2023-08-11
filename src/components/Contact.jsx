import React from 'react'

const Contact = () => {
  return (
    <>
   <div className="container2">
    <h3>WE ARE A TEAM</h3> 
   </div>
   <form>
      <label>Name :</label>
      <input type="text"  placeholder='Enter your name'/><br /><br />
      <label>Email :</label>
      <input type="email" placeholder='Enter your Email' /><br /><br />
      <label>Contact :</label>
      <input type="email" placeholder='Enter your Email' /><br />
      <button className='btn btn-primary'>Submit</button>
      </form>
  
    </>
  )
}

export default Contact;