import React, { useEffect, useState } from 'react';
import './charac.css'
import { Link } from 'react-router-dom';
import Card from '../Card/Card'



const Character = () => {
    
   
   

    return (
        <div className="container">
         
            <div className="content" >
               <Card />
               
            </div>
            
        </div>
    );
};

export default Character;