import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import ErrorMessage from '../login/ErrorMessage';
import { useNavigate } from "react-router-dom";

function DeleteProductFromACategory() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [ErrorMessageAdmin, setErrorMessageAdmin] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const submitAdminHandler = async (e) => {
  
        e.preventDefault();

        if(category === "" || name === "" || id === ""){
            setErrorMessageAdmin('Incomplete fields!');
        }
        else {
            setErrorMessageAdmin(null);
          try{
    
            const { data } = await axios.delete(
                `/api/products/${id}`
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
                  <p className='decorationText'>Delete a product!</p>
              </div>
              <div className='DeleteProductForm'>
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
                           <input type="text" value={name} placeholder="Name of the product" onChange={(e) => setName(e.target.value)} className="credentialsAdmin" />      
                      </div>
                      <div>
                          <input type="text" value={id} placeholder="Id of the product" onChange={(e) => setId(e.target.value)} className="credentialsAdmin" />      
                      </div>
                      <input type="Submit" className="btnAdmin" /> 
                  </form>
                                                            
  
              </div>
  
          </div>
          
  
          
      </div>
    );
}

export default DeleteProductFromACategory;