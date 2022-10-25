import React from 'react';
import "./Sidebar.css";
import { SidebarData } from './SidebarData';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../ui/Card';

function Sidebar() {

  
  //posts va contine toate produsele din baza de date
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
         .then( response => {
            console.log(response);
            setPosts(response.data);  //will update the posts state variable
         })
         .catch(err => {
           console.log(err);
         })
  }, []); // al doilea parametru este pt a face fetch doar o sg data
  
  //categoryProducts va contine doar produsele dintr-o anumita categorie
  const [categoryProducts, setCategoryProducts] = useState(posts);
  const [visibilityAllProducts, setVisibilityAllProducts] = useState(true);

  const filterResult = (category) => {
    const result = posts.filter((currentData) => {
      return currentData.category === category;
    });

    setCategoryProducts(result);
    setVisibilityAllProducts(false);
  } 

  return (
    <div className='background'>
       <div className="page">
           <div className="navbarMenu"></div>
           <div className="contentMenu mx-2">
   
             <div className="sidebar md-3">
               <ul className="SidebarList">
                   {SidebarData.map((val, key) => {
                      return (
                          <li 
                             key={key} 
                             onClick={() => filterResult(val.category)}
                             className="row"
                           >
                           <div>{val.title}</div>
                          </li>
                        );
                   })}
               </ul>
             </div> 
             
             <div className="productsDisplay">
               
               {categoryProducts.map(product => (
                 <Card 
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      category={product.category}
                      ingredients={product.ingredients}
                      price={product.price}
                      image={product.image}
                 />
               ))} 
               
               {visibilityAllProducts ? 
                    posts.map(product => (
                     <Card 
                          key={product._id}
                          id={product._id}
                          name={product.name}
                          category={product.category}
                          ingredients={product.ingredients}
                          price={product.price}
                          image={product.image}
                     />)) 
                     : ""}
  
             </div>
   
           </div>
       </div>
    </div>
    );
}

export default Sidebar;