import React from 'react';
import './gallery.css';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

function GalleryComponent() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/gallery')
         .then( response => {
            console.log(response);
            setPhotos(response.data);  //will update the photos state variable
         })
         .catch(err => {
           console.log(err);
         })
  }, []); // al doilea parametru este pt a face fetch doar o sg data


  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState(' ');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    < >
    <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
    </div>

     <div className='gallery background'>
        {
            photos.map((item) => {
                return(
                  <div className='pics' key={item._id} onClick={() => getImg(item.image)} >
                    <img src={item.image} style={{width:'100%'}} />

                  </div>
                );
            })
        }

     </div>
    </>
  );
}

export default GalleryComponent;