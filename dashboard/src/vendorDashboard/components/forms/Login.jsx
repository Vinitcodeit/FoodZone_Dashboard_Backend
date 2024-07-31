import React, { useState } from "react";
import { API_URL } from '../../data/apiPath'

const Login = ({showWelcomeHandler}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const LoginHandler = async (e)=>{
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({email, password})
      })

      const data = await response.json()
      if (response.ok) {
        alert('Login Success')
        setEmail("")
        setPassword("")
        showWelcomeHandler()
        localStorage.setItem('loginToken', data.token) //storing the token from the data into localhost , token will be generated whenever the vendor logedin
      }

      //getting vendorid from the database when we logedin
      const vendorId = data.vendorId

      console.log("checking for vendorId: ", vendorId);

      //assigning the above vendorid to this api path dynamically
      const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)

      //storing vendor response in vendorData
      const vendorData = await vendorResponse.json()

      //if vendor response in successfully got then the vendor firm id from vendor data is stored
      if(vendorResponse.ok){
        const vendorFirmId = vendorData.vendorFirmId
        console.log("checking for firmId: ", vendorFirmId);

        //storing the firm id automatically whenever vendor gets loged in
        localStorage.setItem('firmId', vendorFirmId)
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="loginSection">
      <form className="authForm" onSubmit={LoginHandler}>
        <h3>Vendor Login</h3>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
        <br />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password" />
        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
