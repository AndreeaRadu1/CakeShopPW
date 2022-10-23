import React from 'react';
import { useState } from 'react'; 
import { useNavigate } from "react-router-dom";

import Modal from './Modal';
import Backdrop from './Backdrop';

function Popup() {

  const [modalIsOpen, setModalIsOpen ] = useState(true);
  
  const navigate = useNavigate();
    const navigateToLogin = () => {
      navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/register');
      };

  function closedModalHandler(){ 
        setModalIsOpen(false);
  }

  return (
    <div className='cardPopup'>
        
        {modalIsOpen ? <Modal onLogin={navigateToLogin} onRegister={navigateToRegister} /> : null } 
        {modalIsOpen && <Backdrop onCancel = {closedModalHandler}  />}
        
    </div>
  );
}

export default Popup;