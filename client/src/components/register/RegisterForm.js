import React, { useState } from 'react';
import "./RegisterForm.css";
import Tilt from 'react-parallax-tilt';
import ErrorMessage from '../login/ErrorMessage';
import axios from "axios";

function RegisterForm() {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmpassword){
      setMessage('Passwords Do not Match!');
    }else {
      setMessage(null);
      try{
        const config = {
          headers: {
            // "Content-type": "application/json",
           },
        };

       // setLoading(true);

        const { data } = await axios.post(
          "/api/users", 
          {
            name, 
            email,
            password,
            telephoneNumber,
          },
          config
        );

        console.log(data);
       // setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      
      }catch (error) {
        setError(error.response.data.message);
      }

    }
    
    console.log(email);

  }


  return (
    <div className="backgroundL">

        {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="warning">{message}</ErrorMessage>}

        <Tilt>
            <div className="GlassForm backdrop-filter backdrop-blur-sm">
               <form className="form" onSubmit={submitHandler}>
                  <div className="text">Register Form</div>
                  <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="credentials" />
                  <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="credentials" />
                  <input type="text" value={telephoneNumber} placeholder="Telephone number" onChange={(e) => setTelephoneNumber(e.target.value)} className="credentials" />
                  <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="credentials" />
                  <input type="password" value={confirmpassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="credentials" />
                  <input type="Submit" className="btn" />
               </form>
               
            </div>
        </Tilt>
    </div>    
  );
}

export default RegisterForm;