import React from "react";

import Logo from "./img/CakeLogo.png";
import Avatar from "./img/avatar.png";

import { MdOutlineShoppingBasket } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


function Header() {
  return (
    <header className="fixed w-screen z-50 p-6 px-16">
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap-1">
                <img src={Logo} className="w-14 object-cover" />
                <p className="font-fancy text-headingColor text-2xl font-bold">Sparkles</p>
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-5">
                   <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                       Menu
                   </li>
                   <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                       About Us
                   </li>
                   <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                       Order Cake
                   </li>
                   <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                       Gallery
                   </li>
                </ul>

                <div className="relative flex items-center justify-center gap-5">
                   <MdFavoriteBorder className="text-textColor text-2xl cursor-pointer"/>
                   {/*<div className="absolute -top-1 -right-2.5 w-3.5 h-3.5 rounded-full bg-cartNumBg flex items-center justify-center ">
                       <p className="text-xs text-white font-semibold">2</p> 
                    </div>  */}
                </div>

                <div className="relative flex items-center justify-center gap-5 ">
                   <MdOutlineShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
                   {/*<div className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-cartNumBg flex items-center justify-center ">
                     <p className="text-xs text-white font-semibold">2</p> 
                    </div>*/}
                </div> 

                <img src={ Avatar } className="w-12 mim-w-[40px] h-12 min-h-[40px] drop-shadow-x1"></img>

            </div>
        </div>


        <div></div>
    </header>
  );
}

export default Header;

//rafce-shortcut