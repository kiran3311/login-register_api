import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import "../Login/Loginstyle.css"

const Login = () => {

  const[name, setName] = useState("")
  const[pass,setPass] = useState("")
  const[userData, setUserdata] = useState([])

  const submitData= async(e)=>{
    e.preventDefault();
    console.log(name,pass)

    const rawResponse = await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api_key":"Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
      },
      body: JSON.stringify({
        "login_id":name,
        "password":pass
      }),
    });
    const content = await rawResponse.json();

    console.log(content);
    setUserdata(content.message)
    console.log(userData.full_name)


  }

  return (
    <>


    <div className='login-head'>
      <h2>Login</h2>
      <p>Enter your account login details</p>
    </div>
     <div className='login'>
      <form onSubmit={submitData}>
       
        <Form.Control size="lg" type="text" placeholder= "&#61447; User name or email" className='login-input mb-4' 
        value={name}
        onChange={(e)=>{setName(e.target.value)}} />
        <Form.Control size="lg" type="password" placeholder="&#61475; password" className='login-input mb-4' 
        value={pass}
        onChange={(e)=>{setPass(e.target.value)}} />
        <Button className='login-btn mb-4' style={{"backgroundColor":"yellow","color":"blue"} } type="submit" onClick={submitData}>Sign in</Button>
      </form>
    </div>

    <div>
      <div className='table'>
      <Table  bordered >
     
      <tbody>
        <tr>
          <td>Fullname</td>
          <td>{userData.full_name}</td>
          
        </tr>
        <tr>
          <td>Username</td>
          <td>{userData.username}</td>
          
        </tr>
        <tr>
          <td>Country</td>
          <td>{userData.country_row_id}</td>
        </tr>
        <tr>
          <td>Email id</td>
          <td>{userData.email_id}</td>
        </tr>
        <tr>
          <td>Mobile number</td>
          <td>{userData.mobile_number}</td>
        </tr>
        <tr>
          <td>Referral id</td>
          <td>{userData.referral_username}</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
    </>
   
  )
}

export default Login
