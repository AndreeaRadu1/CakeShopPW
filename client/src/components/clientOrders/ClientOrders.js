import React from 'react'
import CartCard from '../ui/CartCard';
import './clientOrder.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
function ClientOrders() {
  
   const [orders, setOrders] = useState([]);
   
   useEffect(() => {
     axios.get('http://localhost:5000/api/orders')
          .then( response => {
             console.log(response);
             setOrders(response.data); 
          })
          .catch(err => {
            console.log(err);
          })
      getUserEmail();
      filterResult(userEmail);
   }, [getUserEmail]); 
   
   const [ordersClient, setOrdersClient] = useState(orders);

   const filterResult = (email) => {
     const result = orders.filter((currentData) => {
       return currentData.email === email;
     });
     setOrdersClient(result);
   } 

   const [userEmail,setUserEmail] = useState("");
    function getUserEmail(){
        try {
            const u = JSON.parse(localStorage.getItem("userInfo"));
            setUserEmail(u.email);
            console.log(u.email);
          } catch (ex) {
            setUserEmail(null);
            return null; 
          }
    }


  return (
    <div className='backgroundOrders'>
        <div className='pageCart'>
           <div className="navbarCart"></div>
           <div className='contentCart'>
            <div className="ordersDisplay">
                {ordersClient.map(order => (
                     <CartCard 
                          key={order._id}
                          nume={order.name}
                          email={order.email}
                          telephone={order.telephone}
                          address={order.address}
                          date={order.date}
                          cakes={order.cakes}
                          cakeFlavour={order.cakeFlavour}
                          cakeModel={order.cakeModel}
                          kg={order.kg}
                          message={order.message}
                          status={order.status}
                          className="cards"
                     />    
                   ))} 
                                 
            </div>
           </div>
        </div>  
    </div>  
  );
}

export default ClientOrders;