import React, { useEffect } from 'react';
import "./LoginForm.css";
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import ErrorMessage from './ErrorMessage';
//import { useNavigate } from "react-router-dom";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  //If someone is logged, when the login icon is pressed, we will be redirected to HomePage
  //we will move this to the landing page 
  /*const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    
    if(userInfo){
      navigate("/");
    }
  }, [navigate]);*/

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const config = {
        headers: {
         // "Content-type": "application/json",
        },
      };

      setLoading(true);

      //make the request
      const { data } = await axios.post(
        "/api/users/login", 
        {
          email, 
          password,
        },
        config
      );
      
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error){
      setError(error.response.data.message);
      setLoading(false);
    }
  };


  return (
    <div className="backgroundL">
    
      {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}

       <Tilt>
            <div className="GlassForm backdrop-filter backdrop-blur-sm">
               <form className="form" onSubmit={submitHandler}>
                  <div className="text">Login Form</div>
                  <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="credentials" />
                  <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="credentials" />
                  <input type="Submit" className="btn" />
                  <p className="register">
                      New Customer? <span className="spanUnderline"> <Link to="/register">Register Here!</Link> </span> 
                  </p>
               </form>
               
            </div>
        </Tilt>
    </div>    
  );
}

export default LoginForm;