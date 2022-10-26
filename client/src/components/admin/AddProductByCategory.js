import React from 'react'
import './admin.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from '../login/ErrorMessage';

function AddProductByCategory() {


  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ErrorMessageAdmin, setErrorMessageAdmin] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const submitAdminHandler = async (e) => {
    e.preventDefault();

    if(name === "" || category === "" || image === "" || ingredients === ""){
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
          "/api/products", 
          {
            category,
            name, 
            ingredients,
            price,
            image,
          },
          config
        );      
      }catch (error) {
        setError(error.response.data.message);
      }
    }  
    navigate('/menu');
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
         .then( response => {
            console.log(response);
            setCategories(response.data);  
         })
         .catch(err => {
           console.log(err);
         })
  }, []); 



  return (
    <div className='backgroundAdmin'>
        <div>
          {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
          {ErrorMessageAdmin && <ErrorMessage variant="warning">{ErrorMessageAdmin}</ErrorMessage>}
        </div>
        <div className='pageAdmin'>
            <div className='navbarAdmin'></div>
            <div className='descriptionAction'>
                <p className='decorationText'>Add a new product!</p>
            </div>
            <div className='AddProductForm'>
                <form onSubmit={submitAdminHandler}>
                    <div>
                         <select value={category} onChange={(e) => setCategory(e.target.value) } className="credentialsAdmin">
                          {
                            categories.map(categ =>
                                 <option>{categ.category}</option>
                              )   
                          }                  
                         </select>
                    </div>
                    <div>
                         <input type="text" value={name} placeholder="Name of the new product" onChange={(e) => setName(e.target.value)} className="credentialsAdmin" />      
                    </div>
                    <div>
                        <input type="text" value={ingredients} placeholder="Ingredients of the new product" onChange={(e) => setIngredients(e.target.value)} className="credentialsAdmin" />      
                    </div>
                    <div>
                       <input type="text" value={price} placeholder="Price of the new product" onChange={(e) => setPrice(e.target.value)} className="credentialsAdmin" />      
                    </div>
                    <div>
                        <input type="text" value={image} placeholder="Image of the new product" onChange={(e) => setImage(e.target.value)} className="credentialsAdmin" />      
                    </div>
    
                    <input type="Submit" className="btnAdmin" /> 
                </form>
                                                          

            </div>

        </div>
        

        
    </div>
  );
}

export default AddProductByCategory;