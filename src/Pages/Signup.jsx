import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""})
   const handleSubmit=async (e)=>
   {
e.preventDefault();
const response=await fetch("http://localhost:5000/api/createuser",{
method:'POST',
headers:
{
    'Content-Type':'application/json'
},
body:JSON.stringify(
    {
        name:credentials.name,
        email:credentials.email,
        password:credentials.password,
        location:credentials.location
        
    })


   } );
   const json=await response.json()
   console.log( json)
   if(!json.success)
   {
alert("ENTER VALID CREDENTIALS")
   }
}

   const onChange=(e)=>
   {setcredentials({...credentials,[e.target.name]:e.target.value})

   }
  return (
    <>
    <Navbar></Navbar>
    <div className="container mt-5 p-4 w-50 mx-auto border border-success">
      <form onSubmit={handleSubmit}>
        
  <div className="mb-3">
    <label htmlFor="Name" className="form-label" >Name </label>
    <input type="text" name='name' value={credentials.name} onChange={onChange} className="form-control"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Mail" className="form-label">Mail </label>
    <input type="mail" className="form-control"  name='email'  onChange={onChange} value={credentials.email} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"  name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">location</label>
    <input type="text"  name='location' value={credentials.location} onChange={onChange} className="form-control" />
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user </Link>
</form>
</div>
    </>
  )
}
