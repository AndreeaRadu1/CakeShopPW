import React from 'react';
import { useState } from 'react';

import axios from "axios";
import ErrorMessage from '../login/ErrorMessage';
import { useNavigate } from "react-router-dom";

function UpdateAProductByCategoryAndName() {
  

    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [error, setError] = useState(false);
    const [ErrorMessageAdmin, setErrorMessageAdmin] = useState("");
  
    const navigate = useNavigate();

    const submitAdminHandler = async (e) => {
        
        e.preventDefault();

        if(category === "" || id === ""){
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
    
            const { data } = await axios.put(
                `/api/products/${id}`,
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
  
    return (
      <div className='backgroundAdmin'>

          <div>
            {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
            {ErrorMessageAdmin && <ErrorMessage variant="warning">{ErrorMessageAdmin}</ErrorMessage>}
          </div>

          <div className='pageAdmin'>
              <div className='navbarAdmin'></div>
              <div className='descriptionAction'>
                  <p className='decorationText'>Update a product!</p>                  
                  <p className='decorationText'>Possible categories:</p>
                  <ul className='conditionsAdmin'>
                    <li className='listOrderAdmin'>
                    types of cake
                    </li>
                    <li className='listOrderAdmin'>
                    birthday cake   
                    </li>
                    <li className='listOrderAdmin'>
                    wedding cake   
                    </li>
                    <li className='listOrderAdmin'>
                    kids cake   
                    </li>
                    <li className='listOrderAdmin'>
                    celebration cakes   
                    </li>
                    <li className='listOrderAdmin'>
                    mini cakes   
                    </li>
                    <li className='listOrderAdmin'>
                    cupcakes & others   
                    </li>
                    <li className='listOrderAdmin'>
                    gifts   
                    </li>
                </ul>
              </div>
              <div className='AddProductForm'>
                  <form onSubmit={submitAdminHandler}>
                      <div>
                           <input type="text" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)} className="credentialsAdminUpdate" />       
                      </div>
                      <div>
                           <input type="text" value={id} placeholder="Product id" onChange={(e) => setId(e.target.value)} className="credentialsAdminUpdate" />       
                      </div>
                      <div>
                           <input type="text" value={name} placeholder="Name of the updated product" onChange={(e) => setName(e.target.value)} className="credentialsAdminUpdate" />      
                      </div>
                      <div>
                          <input type="text" value={ingredients} placeholder="Ingredients of the new product" onChange={(e) => setIngredients(e.target.value)} className="credentialsAdminUpdate" />      
                      </div>
                      <div>
                         <input type="text" value={price} placeholder="Price of the new product" onChange={(e) => setPrice(e.target.value)} className="credentialsAdminUpdate" />      
                      </div>
                      <div>
                          <input type="text" value={image} placeholder="Image of the new product" onChange={(e) => setImage(e.target.value)} className="credentialsAdminUpdate" />      
                      </div>
      
                      <input type="Submit" className="btnAdmin" /> 
                  </form>
                                                            
  
              </div>
  
          </div>
          
  
          
      </div>
    );
}

export default UpdateAProductByCategoryAndName;