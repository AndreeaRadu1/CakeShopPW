import React from 'react'
import './orderCake.css';
import { useState/*, useEffect*/ } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import ErrorMessage from '../login/ErrorMessage';
import Popup from '../popup/Popup';

function OrderCake() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [cakes, setCakes] = useState("");
    const [cakeFlavour, setCakeFlavour] = useState("");
    const [cakeModel, setCakeModel] = useState("");
    const [kg, setKg] = useState("");
    const [message, setMessage] = useState("");
    const [ErrorMessageOrder, setErrorMessageOrder] = useState("");
    const [error, setError] = useState(false);
   
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    const submitOrderHandler = async (e) => {
          e.preventDefault();
      if(localStorage.getItem("userInfo")){
            if(name === "" || email === "" || telephone === "" || address === "" || date === "" || cakeModel === "" || kg === "" || message === ""){
              setErrorMessageOrder('Incomplete fields!');
            }else {
              setErrorMessageOrder(null);
              try{
                const config = {
                  headers: {
                    // "Content-type": "application/json",
                   },
                };
        
                const { data } = await axios.post(
                  "/api/orders", 
                  {
                    name, 
                    email,
                    telephone,
                    address,
                    date,
                    cakes,
                    cakeFlavour,
                    cakeModel,
                    kg,
                    message,
                  },
                  config
                );
        
                console.log(data);
              
              }catch (error) {
                setError(error.response.data.message);
              }
        
            }
            console.log(email);
            navigate('/cart');
        }else{
          setIsShown(true);
        }
      };

    //   const [products, setProducts] = useState([]);
      
    //   useEffect(() => {
    //     axios.get('/api/products')
    //          .then( response => {
    //             console.log(response);
    //             setProducts(response.data);  //will update the posts state variable
    //          })
    //          .catch(err => {
    //            console.log(err);
    //          })
    //   }, []); // al doilea parametru este pt a face fetch doar o sg data

      
    //  const [typeOfCake, setTypeOfCake] = useState(products);

    //   const filterCakeTypes = () => {
    //     const result = products.filter((currentData) => {
    //       return currentData.category === "types of cake";
    //     });
    
    //     setTypeOfCake(result);
    //   } 

    //   useEffect(() => {
    //     filterCakeTypes();
    //   },[]);


  return (
    <div className='backgroundOrder'>

        <div className='errorMessageOrder'>
          {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
          {ErrorMessageOrder && <ErrorMessage variant="warning">{ErrorMessageOrder}</ErrorMessage>}
        </div>
        

        <div className='pageOrder'>
            <div className='navbarOrder'></div>
            <div className='leftContent' >
                <p className='titleOrder'>Order</p>
                <ul className='conditions'>
                    <li className='listOrder'>
                    For anniversaries: the day before the event;
                    </li>
                    <li className='listOrder'>
                    For weddings: at least 2-3 weeks before the event;   
                    </li>
                    <li className='listOrder'>
                    For baptisms: 3-4 days before the event;   
                    </li>
                </ul>
                <p className="paragraphOrder">
                For any concerns or questions, you can contact us at phone number 0765678431 or at the email address: sparkles@gmail.com.
                </p>
            </div>
            <div className='rightContent'>


               <div className='container'>
                 <form className="form" onSubmit={submitOrderHandler}>
                    <div className='rowOrder'>
                        <div>
                            <div>
                                <label for="">Name</label>
                            </div>
                          <input type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="credentialsOrder" />      
                        </div>
                        <div>
                            <div>
                              <label for="">Email</label>  
                            </div>
                          <input type="text" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} className="credentialsOrder" />
                        </div>
                        <div>
                            <div>
                              <label for="">Phone</label>  
                            </div>
                          <input type="text" value={telephone} placeholder="Your phone number" onChange={(e) => setTelephone(e.target.value)} className="credentialsOrder" />
                        </div>
                    </div>   

                    <div className='rowOrder'>
                        <div>
                            <div>
                              <label for="">Address</label>  
                            </div>
                          <input type="text" value={address} placeholder="Your address" onChange={(e) => setAddress(e.target.value)} className="credentialsOrder" />
                        </div>
                        <div>
                            <div>
                              <label for="">Date</label>  
                            </div>
                          <input type="text" value={date} placeholder="Date" id="book_date" onChange={(e) => setDate(e.target.value)} className="credentialsOrder" />
                        </div>

                        <div>
                            <div>
                              <label for="">Cake category</label>  
                            </div>
                            {/* <div className='select-wrap'>
                                <select name="" id="" className='credentialsOrder'>
                                    <option value={cakes} onChange={(e) => setCakes("Birthday cake")}>Birthday cake</option>
                                    <option value={cakes} onChange={(e) => setCakes("Wedding cake")}>Wedding Cake</option>
                                    <option value={cakes} onChange={(e) => setCakes("Kids cake")}>Kids Cake</option>
                                    <option value={cakes} onChange={(e) => setCakes("Celebration cake")}>Celebration Cakes</option>
                                    <option value={cakes} onChange={(e) => setCakes("Mini cake")}>Mini Cakes</option>
                                    <option value={cakes} onChange={(e) => setCakes("Vegan-friendly")}>Vegan-friendly</option>
                                    <option value={cakes} onChange={(e) => setCakes("Cupcakes & others")}>Cupcakes & others</option>
                                    <option value={cakes} onChange={(e) => setCakes("Gifts")}>Gifts</option>                                    
                                </select>

                            </div> */}
                            <input type="text" value={cakes} placeholder="Cakes" onChange={(e) => setCakes(e.target.value)} className="credentialsOrder" />
                        
                         </div>

                    </div>  

                    <div className='rowOrder'>
                        <div>
                            <div>
                              <label for="" className='cakeflavours'>Cake Flavour</label>  
                            </div>

                            {/* <div className='select-wrap one-third'>
                                <select name="" id="" className='credentialsOrder select'>
                                    {
                                    typeOfCake.map(product => 
                                         <option value={cakeFlavour} onChange={(e) => setCakeFlavour(product.name)}>{product.name}</option>
                                    )}
                                </select>

                            </div> */}
                            <input type="text" value={cakeFlavour} placeholder="Cake Flavour" onChange={(e) => setCakeFlavour(e.target.value)} className="credentialsOrder" />
                        
                         </div>


                         <div>
                            <div>
                              <label for="">Cake Model</label>  
                            </div>
                            <input type="text" value={cakeModel} placeholder="Cake Model" onChange={(e) => setCakeModel(e.target.value)} className="credentialsOrder" />
                         </div>

                         <div>
                            <div>
                              <label for="">Kg</label>  
                            </div>
                          <input type="text" value={kg} placeholder="Kg" onChange={(e) => setKg(e.target.value)} className="credentialsOrder" />
                        </div>

                    </div>

                    <div>
                        <div>
                            <label for="">Message</label>  
                        </div>
                          <input type="text" value={message} placeholder="Enter details about order" onChange={(e) => setMessage(e.target.value)} className="messageOrder" />
                    </div>

                    <input type="Submit" className="btnOrder" />
                    
                 </form>


                </div>


            </div>

        </div>
        {isShown && <Popup />}
    </div>
  );
}

export default OrderCake;