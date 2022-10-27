import React from 'react'
import './admin.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from '../login/ErrorMessage';

function AddCategory() {

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [ErrorMessageAdmin, setErrorMessageAdmin] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const submitAdminHandler = async (e) => {
    e.preventDefault();

    if(category === "" || title === "" ){
        setErrorMessageAdmin('Incomplete fields!');
    }
    else {
        setErrorMessageAdmin(null);
      try{
        const config = {
          headers: {
            // "Content-type": "application/json",
           },
        };


        const { data } = await axios.post(
          "/api/categories", 
          {
            category,
            title,
          },
          config
        ); 
      }catch (error) {
        setError(error.response.data.message);
      }

    }
    
    navigate('/menu');
  }


  return (
    <div className='backgroundAdmin'>
        <div>
          {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
          {ErrorMessageAdmin && <ErrorMessage variant="warning">{ErrorMessageAdmin}</ErrorMessage>}
        </div>
        <div className='pageAdmin'>
            <div className='navbarAdmin'></div>
            <div className='descriptionAction'>
                <p className='decorationText'>Add a new category!</p>
            </div>
            <div className='AddCategoryForm'>
                <form onSubmit={submitAdminHandler}>
                    <div>
                         <input type="text" value={category} placeholder="New category" onChange={(e) => setCategory(e.target.value)} className="credentialsAdmin" />       
                    </div>
                    <div>
                         <input type="text" value={title} placeholder="New category title" onChange={(e) => setTitle(e.target.value)} className="credentialsAdmin" />      
                    </div>
                    <input type="Submit" className="btnAdmin" /> 
                </form>                                
            </div>
        </div>     
    </div>
  );
}

export default AddCategory;