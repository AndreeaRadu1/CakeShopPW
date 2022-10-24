import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from "C:/Users/radua/OneDrive/Desktop/Proiect final PW/client/src/img/CakeLogo.png";
import Avatar from "C:/Users/radua/OneDrive/Desktop/Proiect final PW/client/src/img/avatar.png";

import { MdOutlineShoppingBasket } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdArrowDropdown }  from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

import FavoritesContext from '../../store/favorite-context';

import "./navbar.css";

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    const navigate = useNavigate();

    
    const [user,setUser] = useState("");
    useEffect(() => {
        setUser(localStorage.getItem("userInfo"));
        getUserEmail();
       // userEmail = JSON.parse(user).email;
    },[getUserEmail]);

    const [userEmail,setUserEmail] = useState("");
    function getUserEmail(){
        try {
            const u = JSON.parse(user);
            setUserEmail(u.email);
            console.log(u.email);
          } catch (ex) {
            setUserEmail(null);
            return null; 
          }
    }
    
    return (
      <header className="fixed w-screen z-50 p-6 px-16">
          <div className="hidden md:flex w-full h-full items-center justify-between">
              <div className="flex items-center gap-1">
                  <img src={Logo} className="w-14 object-cover" />
                  <p className="font-fancy text-headingColor text-2xl font-bold">
                      <Link to='/'>Sparkles</Link>
                  </p>
              </div>
  
              <div className="flex items-center gap-8">
                  <ul className="flex items-center gap-5">
                     <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                         <Link to='/menu'>Menu</Link>
                     </li>
                     <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                         <Link to='/description'>About Us</Link>
                     </li>
                     <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                         <Link to='/order-cake'>Order Cake</Link> 
                     </li>
                     <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                         <Link to='/gallery'>Gallery</Link> 
                     </li>
                  </ul>
  
                  <div className="relative flex items-center justify-center gap-5">
                      <Link to='/favorites'>
                          <MdFavoriteBorder className="text-textColor text-2xl cursor-pointer"/>
                          {favoritesCtx.totalFavorites ? 
                             <div className="absolute -top-1 -right-2.5 w-3.5 h-3.5 rounded-full bg-cartNumBg flex items-center justify-center ">
                                   <p className="text-xs text-white font-semibold">{favoritesCtx.totalFavorites}</p> 
                             </div>    
                             :
                             <div></div>                        
                          }

                      </Link>
                  </div>
  
                  <div className="relative flex items-center justify-center gap-5 ">
                      <Link to='/cart'>
                          <MdOutlineShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
                             {/*<div className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-cartNumBg flex items-center justify-center ">
                                  <p className="text-xs text-white font-semibold">2</p> 
                              </div>*/}
                      </Link>
                  </div> 
  
                  <div>
                    <Link to='/login'>
                        <img src={ Avatar } className="w-12 mim-w-[40px] h-12 min-h-[40px] drop-shadow-x1 cursor-pointer"></img>
                    </Link>
                  </div>

                  <div className="dropdown">
                       <IoMdArrowDropdown />
                       {
                           userEmail !== "admin@gmail.com" ?
                             <div className="dropdown-content">
                               <a href="#" onClick={() => {
                                 localStorage.removeItem("userInfo");
                                 navigate("/");
                               }}>Logout!</a>
                             </div>
                            :
                            <div className="dropdown-content">
                               <a href="#" onClick={() => {
                                 navigate("/addProductAdmin");
                               }}>Add!</a>
                               <a href="#" onClick={() => {
                                 navigate("/deleteProductAdmin");
                               }}>Delete!</a>
                               <a href="#" onClick={() => {
                                 navigate("/updateProductAdmin");
                               }}>Update!</a>
                               <a href="#" onClick={() => {
                                 localStorage.removeItem("userInfo");
                                 navigate("/");
                               }}>Logout!</a>
                             </div>
                       }
                  </div>
                  
              </div>
          </div>
  
          <div></div>
      </header>
    )
  }

  export default MainNavigation;

                