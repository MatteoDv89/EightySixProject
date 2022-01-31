import React, { useState } from 'react';







const Card = () => {

    const [perso,setPerso] = useState([
        {
            id:'lena',
            name:'Mirize Vladilena',
            img:'/assets/vladilena.png'
        },
        
        {
            id:'shin',
            name:'Nozen Shinei',
            img:'/assets/shinei.png'
        },
        {
            id:'theoto',
            name:'Rikka Theoto',
            img:'/assets/theoto.png'
        },
        
        {
            id:'anju',
            name:'Emma Anju',
            img:'/assets/anju.png'
        }
    ])
    
  

    return (
              
        <>
        <div className="cardWidth">
        {perso.map((charac) => {
            return (
                <div className="card">
                               <div  className="card_item">                                
                                <h3>{charac.name}</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.</p>
                                <img src={charac.img} alt="" />
                                <button>Read More</button> 
                            </div>   
                            
                </div>   
            )
        })}
        </div>
        </>
        
         
    )
}

export default Card;